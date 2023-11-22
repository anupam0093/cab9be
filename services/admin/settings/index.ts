import billing from "../../../models/settings/billing";
import dutiesBookings from "../../../models/settings/duties-bookings";
import { SettingsBilling, SettingsDutiesBookings } from "../../../types/customer";

// -------------------------------- SETTINGS DUTIES/BOOKINGS ROUTES --------------------------------

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

// --------------------------------- SETTINGS BILLINGS ROUTES ---------------------------------------

export const settingsBillingService = async (settingsBillingData: SettingsBilling, userId: string) => {
    try {
        const response = await billing.create({
            ...settingsBillingData,
            createdByAdmin: userId as string
        })
        return response;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getSettingsBillingByIdService = async (id: string) => {
    const response = await billing.findById(id)
    // .select({ createdByAdmin: 0 });
    return response;
}