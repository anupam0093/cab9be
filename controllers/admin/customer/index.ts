import { ResponseMessages } from "../../../contants/response";
import { customerService } from "../../../services/admin/customer";
import { CustomerRequest } from "../../../types/customer";
import { Request, Response } from "express"

export const handleNewCustomer = async (req: Request, res: Response) => {
    try {
        const customerData: CustomerRequest = req.body;
        console.log({ customerData })
        if (!customerData?.name || !customerData?.email || !customerData?.phone || !customerData?.pan || !customerData?.gstType) throw new Error(ResponseMessages?.FIELD_REQUIRED)

        const response = await customerService(customerData);
        console.log("response", { response })

        res.json({ message: ResponseMessages?.CREATED_CUSTOMER, data: response });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
}