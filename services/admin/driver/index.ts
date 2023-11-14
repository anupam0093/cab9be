import { ResponseMessages } from "../../../contants/response";
import driver from "../../../models/driver";
import { DriverDetails } from "../../../types/customer";

export const driverService = async (driverData: DriverDetails, userId: string) => {
    try {
        const response = await driver.create({
            ...driverData,
            createdByAdmin: userId as string
        })
        return response;
    } catch (error: any) {
        throw new Error(ResponseMessages?.DUPLICATE_ENTERIES)
    }
}