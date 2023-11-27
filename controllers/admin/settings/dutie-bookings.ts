import { Request, Response } from "express"
import { ResponseMessages } from "../../../contants/response"
import { getSettingsBookingByIdService, settingsDutiesBookings } from "../../../services/admin/settings";
import { SettingsDutiesBookings } from "../../../types/customer";
import dutiesBookings from "../../../models/settings/duties-bookings";
import { isValidObjectId } from "mongoose";


export const handleSettingsDutyBooking = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const data: SettingsDutiesBookings = req.body;
        console.log({ data })

        const response = await settingsDutiesBookings(data, userId);
        console.log("response", { response })
        res.json({ data: response });
    } catch (error: any) {
        res.status(500).json({ success: false, message: ResponseMessages.INTERNAL_SERVER_ERROR })
    }
}

export const handleUpdateSettingsDutiesBookings = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        console.log({ loggedInUser })
        const id = loggedInUser?.id
        console.log({ id })
        const response = await dutiesBookings.findOne({ createdByAdmin: id }).select({ createdByAdmin: 1 })
        console.log("=== FETCH ADMIN ID === ", response)

        const data: SettingsDutiesBookings = req.body;
        console.log({ data })

        const currentId = req.params
        if (!currentId && !isValidObjectId(id)) {
            res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
        }

        if (loggedInUser?.id == response?.createdByAdmin) {
            const schemaId = req.params.id;
            const result = await dutiesBookings.findByIdAndUpdate(
                schemaId,
                data,
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
        res.status(500).json({ success: false, message: ResponseMessages.INTERNAL_SERVER_ERROR })
    }
}

export const getDutiesBookingsByIdController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        console.log({ loggedInUser })
        const id = loggedInUser?.id
        console.log({ id })
        const response = await dutiesBookings.findOne({ createdByAdmin: id }).select({ createdByAdmin: 1 })
        console.log("=== FETCH ADMIN ID === ", response)

        console.log({ loggedInUser })
        if (loggedInUser?.id == response?.createdByAdmin) {
            const id = req.params;
            if (!id || !isValidObjectId(id)) {
                res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
            }
            const response = await getSettingsBookingByIdService(req.params.id);
            res.status(200).send({ success: true, message: ResponseMessages?.CUSTOMER, data: response });
        } else {
            return res.json({ error: ResponseMessages.USER_NOT_FOUND })
        }
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}