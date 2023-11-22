import { Request, Response } from "express"
import { Vehicle } from "../../../types/customer";
import { ResponseMessages } from "../../../contants/response";
import { deleteVehicleByIdService, getAllVehicleService, getVehicleByIdService, vehicleService } from "../../../services/admin/vehicle";
import vehicle from "../../../models/vehicle";
import ROLE from "../../../config/roles";
import { isValidObjectId } from "mongoose";


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

export const getVehicleByIdController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        console.log({ loggedInUser })
        const id = loggedInUser?.id
        console.log({ id })
        const response = await vehicle.findOne({ createdByAdmin: id }).select({ createdByAdmin: 1 })
        console.log("=== FETCH ADMIN ID === ", response)

        if (loggedInUser?.id == response?.createdByAdmin) {
            const id = req.params;
            if (!id || !isValidObjectId(id)) {
                res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
            }
            const response = await getVehicleByIdService(req.params.id);
            res.status(200).send({ success: true, message: ResponseMessages?.VEHICLE, data: response });
        } else {
            return res.json({ error: ResponseMessages.USER_NOT_FOUND })
        }
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}

export const getAllVehicleController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        console.log({ loggedInUser })
        const id = loggedInUser?.id
        console.log({ id })
        const response = await vehicle.findOne({ createdByAdmin: id }).select({ createdByAdmin: 1 })
        console.log("=== FETCH ADMIN ID === ", response)

        if (loggedInUser?.id == response?.createdByAdmin) {
            const response = await getAllVehicleService(loggedInUser?.id);
            res.clearCookie("access_token");
            res.status(200).send({ success: true, message: ResponseMessages?.VEHICLES, data: response });
        } else {
            return res.json({ error: ResponseMessages.USER_NOT_FOUND })
        }
    } catch (error: any) {
        res.status(400).send({ error: ResponseMessages.INTERNAL_SERVER_ERROR });
    }
}

export const deleteVehicleByIdController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        console.log({ loggedInUser })
        const id = loggedInUser?.id
        console.log({ id })
        const response = await vehicle.findOne({ createdByAdmin: id }).select({ createdByAdmin: 1 })
        console.log("=== FETCH ADMIN ID === ", response)

        if (loggedInUser?.id == response?.createdByAdmin) {
            const id = req.params
            if (!id && !isValidObjectId(id)) {
                res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
            }
            const response = await deleteVehicleByIdService(req.params.id)
            res.status(200).send({ success: true, message: ResponseMessages?.DELETED_VEHICLE, data: response });
        } else {
            return res.json({ error: ResponseMessages.USER_NOT_FOUND })
        }
    } catch (error: any) {
        res.status(400).send({ error: ResponseMessages.INTERNAL_SERVER_ERROR });
    }
}

export const handleUpdateVehicleController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        console.log({ loggedInUser })
        const id = loggedInUser?.id
        console.log({ id })
        const response = await vehicle.findOne({ createdByAdmin: id }).select({ createdByAdmin: 1 })
        console.log("=== FETCH ADMIN ID === ", response)

        const updateVehicleData: Vehicle = req.body;
        if (loggedInUser && loggedInUser?.role === ROLE.admin) {
            const id = req.params
            if (!id && !isValidObjectId(id)) {
                res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
            }
            const driverId = req.params.id;
            const updateVehicle = await vehicle.findByIdAndUpdate(
                driverId,
                updateVehicleData,
                { new: true }
            );

            if (!updateVehicle) {
                res.status(404).json({ error: ResponseMessages.CUSTOMER_NOT_FOUND });
                return;
            }
            res.status(200).json(updateVehicle);
        } else {
            return res.json({ error: ResponseMessages.USER_NOT_FOUND })
        }

    } catch (error: any) {
        res.status(400).send({ error: ResponseMessages.INTERNAL_SERVER_ERROR });
    }
}




