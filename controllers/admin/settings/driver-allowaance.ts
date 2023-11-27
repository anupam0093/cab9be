import { Request, Response } from "express"
import { settingsDriverAllowance } from "../../../services/admin/settings";
import { ResponseMessages } from "../../../contants/response";
import driverAllowance from "../../../models/settings/driver-allowance";
import { isValidObjectId } from "mongoose";


type DriverAllowanceSubData = {
    selectAllowanceType: string;
    chargedToCustomer: boolean;
    amount: number;
};

type DriverAllowanceType = {
    driverAllowances: DriverAllowanceSubData[];
    earlyStartTime: Date;
    lateEndTime: Date;
};

export const handleCreateDriverAllowance = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const data: DriverAllowanceType = req.body;
        console.log({ data })

        const response = await settingsDriverAllowance(data, userId);
        console.log("response", { response })
        res.json({ data: response });
    } catch (error: any) {
        res.status(500).json({ success: false, message: ResponseMessages.INTERNAL_SERVER_ERROR })
    }
}

export const handleUpdateDriverAllowance = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        console.log({ loggedInUser })
        const id = loggedInUser?.id
        console.log({ id })
        const response = await driverAllowance.findOne({ createdByAdmin: id }).select({ createdByAdmin: 1 })
        console.log("=== FETCH ADMIN ID === ", response)

        const updatedCustomerData: DriverAllowanceType = req.body;
        console.log({ updatedCustomerData })

        const currentId = req.params
        if (!currentId && !isValidObjectId(id)) {
            res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
        }

        if (loggedInUser?.id == response?.createdByAdmin) {
            const driverAllowanceId = req.params.id;
            const result = await driverAllowance.findByIdAndUpdate(
                driverAllowanceId,
                updatedCustomerData,
                { new: true }
            );
            console.log({ result })

            if (!result) {
                res.status(404).json({ error: ResponseMessages.NOT_FOUND });
                return;
            }
            res.status(200).json(result);
        } else {
            return res.json({ error: ResponseMessages.USER_NOT_FOUND })
        }

    } catch (error: any) {
        res.status(400).send({ error: ResponseMessages.INTERNAL_SERVER_ERROR });
    }
}


