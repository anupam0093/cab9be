import { ResponseMessages } from "../../../contants/response";
import { customerService } from "../../../services/admin/customer";
import { decodeJWT } from "../../../services/auth-service";
import { CustomerRequest } from "../../../types/customer";
import { Request, Response } from "express"

export const handleNewCustomer = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const customerData: CustomerRequest = req.body;
        if (!customerData?.name || !customerData?.email || !customerData?.phone || !customerData?.pan || !customerData?.gstType) throw new Error(ResponseMessages?.FIELD_REQUIRED)
        const response = await customerService(customerData, userId);
        console.log("response", { response })
        res.clearCookie("access_token");
        res.json({ message: ResponseMessages?.CREATED_CUSTOMER, data: response });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
}