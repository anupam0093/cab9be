import { Request, Response } from "express"
import { ResponseMessages } from "../../../contants/response"
import { DriverDetails } from "../../../types/customer";
import { driverService, getDriverByIdService } from "../../../services/admin/driver";
import ROLE from "../../../config/roles";
import { isValidObjectId } from "mongoose";


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

export const getDriverByIdController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user;
        if (loggedInUser && loggedInUser?.role === ROLE.admin) {
            const id = req.params;
            if (!id || !isValidObjectId(id)) {
                res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
            }
            const response = await getDriverByIdService(req.params.id);
            res.status(200).send({ success: true, message: ResponseMessages?.DRIVER, data: response });
        }
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}
