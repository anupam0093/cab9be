import { Request, Response } from "express";
import ROLE, { STATUS } from "../../config/roles";
import { ResponseMessages } from "../../contants/response";
import { registerAdminService } from "../../services/admin";
const bcryptjs = require("bcryptjs");
import users from "../../models/users";
import { signJWT } from "../../services/auth-service";
import { sendMagicLinkService } from "../../services/email-services";

// SUPERADMIN SIGNUP CONTROLLER
export const handleSuperadminController = async (req: Request, res: Response) => {
    try {
        const { name, email, password, phone, confirmPassword } = req.body;
        const user = await registerAdminService(
            name,
            email,
            password,
            confirmPassword,
            phone,
            ROLE.superadmin
        );

        console.log({ user })
        const payload = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            confirmPassword: confirmPassword
        }
        const jwt = signJWT(payload)
        const link = `https://mail.zoho.in/zm/#mail/folder/inbox/api/auth/admin/verify/${jwt}`;
        console.log({ link })

        const sendMagicLink = await sendMagicLinkService(email, link, user?.id);

        console.log("== Send magic ling ==", { sendMagicLink })

        if (sendMagicLink) {
            return res.status(200).json({
                success: true,
                user,
                message: ResponseMessages?.REGISTRATION,
            });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}


// ADMIN LOGIN
export const handleAdminLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await users.findOne({ email: email });
        console.log({ user })
        if (!user) throw new Error("User not found");
        if (user?.status === STATUS.VERIFIED) {
            const userPassword = await bcryptjs.compare(password, user.password);
            if (!userPassword) res.status(401).json({ success: false, message: ResponseMessages.INCORRECT_PASSWORD })
            if (userPassword) {
                const payload = {
                    user: {
                        id: user._id,
                        name: user.name,
                        role: user.role,
                        password: user.password,
                        expiresIn: process.env.TOKEN_EXPIRATION
                    },
                };
                const token = signJWT(payload);
                const result = {
                    user: user,
                    token: `Bearer ${token}`,
                    expiresIn: process.env.TOKEN_EXPIRATION,
                };
                res.cookie("access_token", token, {
                    httpOnly: true,
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                }).send({
                    success: true,
                    ...result,
                    token: token,
                    message: ResponseMessages.LOGIN_SUCCESS,
                })
            } else {
                res.status(200).send({ success: false, message: ResponseMessages.USER_NOT_FOUND });
            }
        } else {
            res.status(200).send({ success: false, message: ResponseMessages.INVALID_ACCOUNT_VALIDATION });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
