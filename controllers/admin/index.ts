import { Request, Response } from "express";
import ROLE from "../../config/roles";
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
import users from "../../models/users";
import { ResponseMessages } from "../../contants/response";
import { registerAdminService } from "../../services/admin";
import { signJWT } from "../../services/auth-service";
import { sendMagicLinkService } from "../../services/email-services";

// ADMIN SIGNUP CONTROLLER 
export const handleAdminController = async (req: Request, res: Response) => {
    try {
        const { name, email, password, phone, confirmPassword } = req.body;
        const user = await registerAdminService(
            name,
            email,
            password,
            confirmPassword,
            phone,
            ROLE.admin
        );

        //Ankur Number :  9927731332

        console.log({ user })
        const payload = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            confirmPassword: confirmPassword
        }
        const jwt = signJWT(payload)

        const link = `${process.env.CLIENT_URL}/verify/${jwt}`;
        console.log({ link })

        const currentDate = Date.now();
        console.log({ currentDate })

        const sendMagicLink = await sendMagicLinkService(email, link, user?.id, currentDate);
        // const sendMagicLink = await sendMagicLinkService(email, link);

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
};

export const handleAdminLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await users.findOne({ email: email });
        console.log({ user })
        if (!user) throw new Error("User not found");
        if (!user.password) throw new Error("User not found");
        if (user) {
            const userPassword = await bcryptjs.compare(password, user.password);
            if (!userPassword) res.status(401).json({ success: false, message: ResponseMessages.INCORRECT_PASSWORD })
            if (userPassword) {

                const payload = {
                    email: user.email,
                    password: user.password,
                    role: user.role,
                    name: user.name,
                    expiresIn: process.env.TOKEN_EXPIRATION
                }

                const token = jwt.sign(
                    { ...payload },
                    process.env.JWT_SECRET_KEY,
                    { expiresIn: "24h" },
                );
                const result = {
                    user: user,
                    token: `Bearer ${token}`,
                    expiresIn: process.env.TOKEN_EXPIRATION,
                };

                // console.log("=== RESULT ===", { result })

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
            res.status(200).send({ success: false, message: ResponseMessages.USER_NOT_FOUND });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};














