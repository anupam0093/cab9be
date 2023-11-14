import { Request, Response } from "express"
import { ResponseMessages } from "../../../contants/response"
import { DriverDetails } from "../../../types/customer";
import { driverService } from "../../../services/admin/driver";


export const handleNewDriver = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const data: DriverDetails = req.body;
        if (!data?.name || !data?.phone || !data?.pan) throw new Error(ResponseMessages?.FIELD_REQUIRED)
        const response = await driverService(data, userId);
        console.log("response", { response })
        res.json({ message: ResponseMessages?.CREATED_DRIVER, data: response });

    } catch (error: any) {
        res.status(500).json({ sucess: false, message: ResponseMessages.INTERNAL_SERVER_ERROR })

    }

}
