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


export const getDriverByIdService = async (id: string) => {
    const response = await driver.findById(id).select({ createdByAdmin: 0 });
    return response;
}