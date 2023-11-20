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

export const getVehicleByIdService = async (id: string) => {
    const response = await vehicle.findById(id).select({ createdByAdmin: 0 });
    return response;
}

export const getAllVehicleService = async (userId: string) => {
    return await vehicle.find({ createdByAdmin: userId })
}

export const deleteVehicleByIdService = async (id: string) => {
    const response = await vehicle.findByIdAndDelete(id)
    return response;
}