import dutiesBookings from "../../../models/settings/duties-bookings";
import { SettingsDutiesBookings } from "../../../types/customer";

export const settingsDutiesBookings = async (settingsData: SettingsDutiesBookings, userId: string) => {
    try {
        const response = await dutiesBookings.create({
            ...settingsData,
            createdByAdmin: userId as string
        })
        return response;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getSettingsBookingByIdService = async (id: string) => {
    const response = await dutiesBookings.findById(id)
    // .select({ createdByAdmin: 0 });
    return response;
}