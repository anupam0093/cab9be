import { ResponseMessages } from "../../contants/response";
import users from "../../models/users";
const bcryptjs = require("bcryptjs");

export const registerAdminService = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    phone: string,
    role: string,
) => {

    const user = await users.findOne({ email });
    if (user) throw new Error(ResponseMessages?.ACCOUNT_ALREADY_EXISTS_WITH_EMAIL);

    //VALIDATE THE PHONE
    const userPhone = await users.findOne({ phone });
    if (userPhone) throw new Error(ResponseMessages?.ACCOUNT_ALREADY_EXISTS_WITH_PHONE);

    // VALIDATE PASSWORD
    if (password !== confirmPassword) throw new Error(ResponseMessages?.PASSWORDS_DO_NOT_MATCH)

    if (!name || !email || !password || !phone || !confirmPassword)
        throw new Error(ResponseMessages?.FIELD_REQUIRED);

    // GET THE HASHED PASSWORD 
    const hashedPassword = await bcryptjs.hash(password, 10);
    const payload = {
        name,
        email,
        phone,
        role,
        isRegistered: true,
        password: hashedPassword,
        confirmPassword: hashedPassword
    }

    const newUser = new users({
        ...payload,
    });
    await newUser.save();
    return newUser;
};