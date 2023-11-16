import vehicle from "../../../models/vehicle";
import { Vehicle } from "../../../types/customer";

export const vehicleService = async (vehicleData: Vehicle, userId: string) => {
    try {
        const response = await vehicle.create({
            ...vehicleData,
            createdByAdmin: userId as string
        })
        return response;
    } catch (error: any) {
        throw new Error(error)
    }
}