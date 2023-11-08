import { isValidObjectId } from "mongoose";
import { ResponseMessages } from "../../../contants/response";
import multipleFileUpload, { customerService, deleteCustomerByIdService, getAllCustomerService, getCustomerByIdService } from "../../../services/admin/customer";
import { CustomerRequest } from "../../../types/customer";
import { Request, Response } from "express"
import ROLE from "../../../config/roles";
import newCustomer from "../../../models/customer"
import mongoose from "mongoose";
import Files from "../../../models/file";
import { resizeImageAndUpload } from "../../../services/admin/customer/image-service";


// --------------------------------- CUSTOMER CONTROLLER --------------------------------------- 
export const handleNewCustomer = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const customerData: CustomerRequest = req.body;
        if (!customerData?.name || !customerData?.email || !customerData?.phone || !customerData?.pan || !customerData?.gstType) throw new Error(ResponseMessages?.FIELD_REQUIRED)
        const response = await customerService(customerData, userId);
        console.log("response", { response })
        res.clearCookie("access_token");
        res.json({ message: ResponseMessages?.CREATED_CUSTOMER, data: response });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const getCustomerByIdController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user;
        if (loggedInUser && loggedInUser?.role === ROLE.admin) {
            const id = req.params;
            if (!id || !isValidObjectId(id)) {
                res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
            }
            res.clearCookie("access_token");
            const response = await getCustomerByIdService(req.params.id);
            res.status(200).send({ success: true, message: ResponseMessages?.CUSTOMER, data: response });
        }
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}

export const deleteCustomerByIdController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        if (loggedInUser && loggedInUser?.role === ROLE.admin) {
            const id = req.params
            if (!id && !isValidObjectId(id)) {
                res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
            }
            const response = await deleteCustomerByIdService(req.params.id)
            res.clearCookie("access_token");
            res.status(200).send({ success: true, message: ResponseMessages?.DELETED_CUSTOMER, data: response });
        }
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}

export const getAllCustomerController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        if (loggedInUser && loggedInUser?.role === ROLE.admin) {
            const response = await getAllCustomerService(loggedInUser?.id);
            res.clearCookie("access_token");
            res.status(200).send({ success: true, message: ResponseMessages?.CUSTOMERS, data: response });
        }
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}

export const UploadMutipleImageController = async (req: Request, res: Response) => {
    try {
        const { name, price, des } = req.body;
        if (!name || !price || !des) {
            res.send(400).send("all fields are required {name,price,dec}")
        }
        const payload = {
            name, price, des
        }
        // const uploadbeds = await multipleFileUpload(req.files, payload);
        // res.status(200).send(uploadbeds);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}




