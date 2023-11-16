import { Request, Response } from "express"
import { Vehicle } from "../../../types/customer";
import { ResponseMessages } from "../../../contants/response";
import { vehicleService } from "../../../services/admin/vehicle";
import vehicle from "../../../models/vehicle";


// --------------------------------- VEHICLE ROUTES ------------------------------------ 
export const handleAddVehicle = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const data: Vehicle = req.body;
        if (!data?.modelName || !data?.vehicleNumber || !data?.seatingCapacity || !data?.vehicleCode || !data?.insurance) throw new Error(ResponseMessages?.FIELD_REQUIRED)
        const vehicleNumber = await vehicle.findOne({ vehicleNumber: data?.vehicleNumber })
        if (vehicleNumber) {
            return res.status(400).json({ success: false, message: ResponseMessages?.VEHICLE_NUMBER_EXISTS })
        }
        const response = await vehicleService(data, userId);
        res.json({ message: ResponseMessages?.CREATED_VEHICLE, data: response });

    } catch (error: any) {
        res.status(500).json({ sucess: false, message: error.message })
    }
}