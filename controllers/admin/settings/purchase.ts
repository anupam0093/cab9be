import { Request, Response } from "express"
import { SettingPurchase } from "../../../types/customer";
import { settingsPurchase } from "../../../services/admin/settings";
import { ResponseMessages } from "../../../contants/response";
import purchase from "../../../models/settings/purchase";

export const handleSettingsPurchase = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const data: SettingPurchase = req.body;
        console.log({ data })

        const response = await settingsPurchase(data, userId);
        console.log("response", { response })
        res.json({ data: response });
    } catch (error: any) {
        res.status(500).json({ success: false, message: ResponseMessages.INTERNAL_SERVER_ERROR })
    }
}

export const handleUpdateSettingsPurchase = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        console.log({ loggedInUser })
        const id = loggedInUser?.id
        console.log({ id })
        const response = await purchase.findOne({ createdByAdmin: id }).select({ createdByAdmin: 1 })
        console.log("=== FETCH ADMIN ID === ", response)

        if (loggedInUser?.id == response?.createdByAdmin) {
            const updatedOptions: SettingPurchase = req.body;
            const response = await purchase.findOneAndUpdate({}, { $set: updatedOptions }, { new: true });
            res.json({ success: true, message: ResponseMessages.UPDATED_PURCHASE, response });
        } else {
            return res.json({ error: ResponseMessages.USER_NOT_FOUND })
        }
    } catch (error: any) {
        res.status(500).json({ success: false, message: ResponseMessages.INTERNAL_SERVER_ERROR })
    }
}