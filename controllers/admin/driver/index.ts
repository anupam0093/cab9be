import { Request, Response } from "express"
import { ResponseMessages } from "../../../contants/response"
import { DriverDetails } from "../../../types/customer";
import { deleteDriverByIdService, driverService, getAllDriverService, getDriverByIdService } from "../../../services/admin/driver";
import ROLE from "../../../config/roles";
import { isValidObjectId } from "mongoose";
import driver from "../../../models/driver";
import { resizeImageAndUpload } from "../../../services/admin/customer/image-service";

// --------------------------------- DRIVER CONTROLLER --------------------------------------- 
export const handleNewDriver = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const data: DriverDetails = req.body;
        if (!data?.name || !data?.phone || !data?.pan || !data?.aadharCardNumber) throw new Error(ResponseMessages?.FIELD_REQUIRED)

        const driverPhone = await driver.findOne({ phone: data?.phone })
        const driverAlternatePhone = await driver.findOne({ alternatePhone: data?.alternatePhone })
        const driverPanNumber = await driver.findOne({ pan: data?.pan })
        const driverAadharNumber = await driver.findOne({ aadharCardNumber: data?.aadharCardNumber })

        if (driverPhone || driverAlternatePhone) {
            return res.status(400).json({ success: false, message: ResponseMessages?.ACCOUNT_ALREADY_EXISTS_WITH_PHONE })
        } else if (driverPanNumber) {
            return res.status(400).json({ success: false, message: ResponseMessages?.ACCOUNT_ALREADY_EXISTS_WITH_PAN })
        } else if (driverAadharNumber) {
            return res.status(400).json({ success: false, message: ResponseMessages?.ACCOUNT_ALREADY_EXISTS_WITH_AADHAR })
        }


        const response = await driverService(data, userId);
        console.log("response", { response })
        res.json({ message: ResponseMessages?.CREATED_DRIVER, data: response });

    } catch (error: any) {
        res.status(500).json({ sucess: false, message: error.message })
    }
}

export const getDriverByIdController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user;
        if (loggedInUser && loggedInUser?.role === ROLE.admin) {
            const id = req.params;
            if (!id || !isValidObjectId(id)) {
                res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
            }
            const response = await getDriverByIdService(req.params.id);
            res.status(200).send({ success: true, message: ResponseMessages?.DRIVER, data: response });
        }
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}

export const deleteDriverByIdController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        if (loggedInUser && loggedInUser?.role === ROLE.admin) {
            const id = req.params
            if (!id && !isValidObjectId(id)) {
                res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
            }
            const response = await deleteDriverByIdService(req.params.id)
            res.status(200).send({ success: true, message: ResponseMessages?.DELETED_DRIVER, data: response });
        }
    } catch (error: any) {
        res.status(400).send({ error: ResponseMessages.INTERNAL_SERVER_ERROR });
    }
}

export const getAllDriverController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        if (loggedInUser && loggedInUser?.role === ROLE.admin) {
            const response = await getAllDriverService(loggedInUser?.id);
            res.clearCookie("access_token");
            res.status(200).send({ success: true, message: ResponseMessages?.DRIVERS, data: response });
        }
    } catch (error: any) {
        res.status(400).send({ error: ResponseMessages.INTERNAL_SERVER_ERROR });
    }
}

export const handleUpdateDriverController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        const updatedDriverData: DriverDetails = req.body;
        if (loggedInUser && loggedInUser?.role === ROLE.admin) {
            const id = req.params
            if (!id && !isValidObjectId(id)) {
                res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
            }
            const driverId = req.params.id;
            const updatedCustomer = await driver.findByIdAndUpdate(
                driverId,
                updatedDriverData,
                { new: true }
            );

            if (!updatedCustomer) {
                res.status(404).json({ error: ResponseMessages.CUSTOMER_NOT_FOUND });
                return;
            }
            res.status(200).json(updatedCustomer);
        }

    } catch (error: any) {
        res.status(400).send({ error: ResponseMessages.INTERNAL_SERVER_ERROR });
    }
}


export const handleProfileController = async (req: Request, res: Response) => {
    try {
        if (req.file == undefined) {
            return res.status(400).send({ message: ResponseMessages.IMAGE });
        }
        const profile = `${process.env.BASE_URL}/images/${req.file.filename}`
        // const profile = await resizeImageAndUpload(req.file, "profile");
        res.status(200).send({ success: true, profile });
    } catch (error) {
        res.status(500).send({ error: ResponseMessages.INTERNAL_SERVER_ERROR })
    }
}
