import { ResponseMessages } from "../../contants/response";
import users from "../../models/users";
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

export const registerAdminService = async (
    name: string,
    email: string,
    password: string,
    phone: string,
    role: string,
) => {

    // VALIDATE THE EMAIL
    const user = await users.findOne({ email });
    if (user) throw new Error(ResponseMessages?.ACCOUNT_ALREADY_EXISTS_WITH_EMAIL);

    //VALIDATE THE PHONE
    const userPhone = await users.findOne({ phone });
    if (userPhone) throw new Error(ResponseMessages?.ACCOUNT_ALREADY_EXISTS_WITH_PHONE);

    if (!name || !email || !password || !phone)
        throw new Error(ResponseMessages?.FIELD_REQUIRED);

    // GET THE HASHED PASSWORD 
    const hashedPassword = await bcryptjs.hash(password, 10);
    const payload = {
        name,
        email,
        phone,
        role,
        isRegistered: true,
        password: hashedPassword
    }

    const newUser = new users({
        ...payload,
    });
    await newUser.save();
    return newUser;
};