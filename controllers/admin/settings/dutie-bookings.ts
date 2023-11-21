import { Request, Response } from "express"
import { ResponseMessages } from "../../../contants/response"
import { getSettingsBookingByIdService, settingsDutiesBookings } from "../../../services/admin/settings";
import { SettingsDutiesBookings } from "../../../types/customer";
import dutiesBookings from "../../../models/settings/duties-bookings";
import ROLE from "../../../config/roles";
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

        if (loggedInUser && loggedInUser?.role === ROLE.admin) {
            const updatedOptions: SettingsDutiesBookings = req.body;
            const response = await dutiesBookings.findOneAndUpdate({}, { $set: updatedOptions }, { new: true });
            res.json({ success: true, message: ResponseMessages.UPDATED_DUTIES_BOOKING, response });
        }
    } catch (error: any) {
        res.status(500).json({ success: false, message: ResponseMessages.INTERNAL_SERVER_ERROR })
    }
}

export const getDutiesBookingsByIdController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        console.log({ loggedInUser })
        if (loggedInUser && loggedInUser?.role === ROLE.admin) {
            const id = req.params;
            if (!id || !isValidObjectId(id)) {
                res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
            }
            const response = await getSettingsBookingByIdService(req.params.id);
            res.status(200).send({ success: true, message: ResponseMessages?.CUSTOMER, data: response });
        }
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}