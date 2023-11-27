import { Request, Response } from "express"
import { settingsNotifications } from "../../../services/admin/settings";
import { ResponseMessages } from "../../../contants/response";
import { NotificationsRequestBody } from "../../../types/customer";
import notification from "../../../models/settings/notification";
import { isValidObjectId } from "mongoose";

export const handleCreateNotifications = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const data: NotificationsRequestBody = req.body;

        const activatedData = await notification.findOne({
            $or: [
                { 'sms.phoneNumbers': { $in: data.sms.phoneNumbers } },
                { 'email.emailAddress': { $in: data.email.emailAddress } }
            ]
        })
        if (activatedData) {
            return res.status(400).json({ success: false, message: ResponseMessages.ACTIVATED })
        }
        const response = await settingsNotifications(data, userId);
        console.log("response", { response })
        res.json({ data: response });
    } catch (error: any) {
        res.status(500).json({ success: false, message: ResponseMessages.INTERNAL_SERVER_ERROR })
    }
}

export const handleUpdateNotification = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        console.log({ loggedInUser })
        const id = loggedInUser?.id
        console.log({ id })
        const response = await notification.findOne({ createdByAdmin: id }).select({ createdByAdmin: 1 })
        console.log("=== FETCH ADMIN ID === ", response)

        const updatedCustomerData: NotificationsRequestBody = req.body;
        console.log({ updatedCustomerData })

        const currentId = req.params
        if (!currentId && !isValidObjectId(id)) {
            res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
        }

        if (loggedInUser?.id == response?.createdByAdmin) {
            const driverAllowanceId = req.params.id;
            const result = await notification.findByIdAndUpdate(
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