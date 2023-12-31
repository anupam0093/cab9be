import billing from "../../../models/settings/billing";
import driverAllowance from "../../../models/settings/driver-allowance";
import dutiesBookings from "../../../models/settings/duties-bookings";
import notification from "../../../models/settings/notification";
import purchase from "../../../models/settings/purchase";
import { DriverAllowance, NotificationsRequestBody, SettingPurchase, SettingsBilling, SettingsDutiesBookings } from "../../../types/customer";

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

// --------------------------------- SETTINGS PURCHASE ---------------------------------------

export const settingsPurchase = async (settingsPurchaseData: SettingPurchase, userId: string) => {
    try {
        const response = await purchase.create({
            ...settingsPurchaseData,
            createdByAdmin: userId as string
        })
        return response;
    } catch (error: any) {
        throw new Error(error)
    }
}

// --------------------------------- SETTINGS DRIVER ALLOWANCE ---------------------------------------

export const settingsDriverAllowance = async (settingsDriverAllowance: DriverAllowance, userId: string) => {
    try {
        const response = await driverAllowance.create({
            ...settingsDriverAllowance,
            createdByAdmin: userId as string
        })
        return response;
    } catch (error: any) {
        throw new Error(error)
    }
}

// --------------------------------- SETTINGS NOTIFICATIONS ---------------------------------------

export const settingsNotifications = async (notificationData: NotificationsRequestBody, userId: string) => {
    try {
        const payload = new notification({
            ...notificationData,
            createdByAdmin: userId as string
        });
        return await payload.save()
    } catch (error: any) {
        throw new Error(error)
    }
}




