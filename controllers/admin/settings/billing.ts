import { ResponseMessages } from "../../../contants/response"
import { Request, Response } from "express"
import { settingsBillingService } from "../../../services/admin/settings";
import { SettingsBilling } from "../../../types/customer";
import billing from "../../../models/settings/billing";

export const handleSettingsBilling = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const data: SettingsBilling = req.body;
        console.log({ data })
        const response = await settingsBillingService(data, userId);

        console.log("=== CREATE BILLING RESPONSE === ", { response })
        res.json({ data: response });
    } catch (error: any) {
        res.status(500).json({ sucess: false, message: ResponseMessages.INTERNAL_SERVER_ERROR })
    }
}


export const handleUpdateSettingsBilling = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        console.log({ loggedInUser })
        const id = loggedInUser?.id
        console.log({ id })
        const response = await billing.findOne({ createdByAdmin: id }).select({ createdByAdmin: 1 })
        console.log("=== FETCH ADMIN ID === ", response)

        if (loggedInUser?.id == response?.createdByAdmin) {
            const updatedOptions: SettingsBilling = req.body;
            const response = await billing.findOneAndUpdate({}, { $set: updatedOptions }, { new: true });
            res.json({ success: true, message: ResponseMessages.UPDATED_BILLING, response });
        } else {
            return res.json({ error: ResponseMessages.USER_NOT_FOUND })
        }
    } catch (error: any) {
        res.status(500).json({ success: false, message: ResponseMessages.INTERNAL_SERVER_ERROR })
    }
}