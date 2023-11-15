import { isValidObjectId } from "mongoose";
import { ResponseMessages } from "../../../contants/response";
import { customerService, deleteCustomerByIdService, getAllCustomerService, getCustomerByIdService } from "../../../services/admin/customer";
import { CustomerRequest } from "../../../types/customer";
import { Request, Response } from "express"
import ROLE from "../../../config/roles";
import CustomerArrayModel from "../../../models/file"
import Customer from "../../../models/customer";

// --------------------------------- CUSTOMER CONTROLLER --------------------------------------- 
export const handleNewCustomer = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const customerData: CustomerRequest = req.body;
        if (!customerData?.name || !customerData?.email || !customerData?.phone || !customerData?.pan || !customerData?.gstType) throw new Error(ResponseMessages?.FIELD_REQUIRED)

        const customerPhone = await Customer.findOne({ phone: customerData?.phone })
        const customerAlternatePhone = await Customer.findOne({ alternatePhone: customerData?.alternatePhone })
        const customerPanNumber = await Customer.findOne({ pan: customerData?.pan })
        const customerEmail = await Customer.findOne({ email: customerData?.email })

        if (customerPhone || customerAlternatePhone) {
            return res.status(400).json({ success: false, message: ResponseMessages?.ACCOUNT_ALREADY_EXISTS_WITH_PHONE })
        } else if (customerPanNumber) {
            return res.status(400).json({ success: false, message: ResponseMessages?.ACCOUNT_ALREADY_EXISTS_WITH_PAN })
        } else if (customerEmail) {
            return res.status(400).json({ success: false, message: ResponseMessages?.ACCOUNT_ALREADY_EXISTS_WITH_EMAIL })
        }

        const response = await customerService(customerData, userId);
        console.log("response", { response })
        res.json({ message: ResponseMessages?.CREATED_CUSTOMER, data: response });
    } catch (error: any) {
        res.status(500).json({ success: false, message: ResponseMessages.INTERNAL_SERVER_ERROR })
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
            res.status(200).send({ success: true, message: ResponseMessages?.DELETED_CUSTOMER, data: response });
        }
    } catch (error: any) {
        res.status(400).send({ error: ResponseMessages.INTERNAL_SERVER_ERROR });
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
        res.status(400).send({ error: ResponseMessages.INTERNAL_SERVER_ERROR });
    }
}

export const handleUpdateCustomerController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        const updatedCustomerData: CustomerRequest = req.body;
        if (loggedInUser && loggedInUser?.role === ROLE.admin) {
            const id = req.params
            if (!id && !isValidObjectId(id)) {
                res.status(500).json({ success: false, message: ResponseMessages.ID_REQUIRED });
            }
            const customerId = req.params.id;
            const updatedCustomer = await Customer.findByIdAndUpdate(
                customerId,
                updatedCustomerData,
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

export const handleFileController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        console.log({ loggedInUser })
        const id = loggedInUser?.id
        // console.log({ id })
        // const customer = await Customer.findOne({ createdByAdmin: id }).select({ id: 1 })
        // console.log({ customer })

        const { name } = req.body;
        if (!name) {
            res.status(400).json({ success: false, message: ResponseMessages?.FIELD_REQUIRED })
        }

        if (req.file == undefined) {
            return res.status(400).send({ message: ResponseMessages.IMAGE });
        }

        const customers = [{
            name: name,
            image: `${process.env.BASE_URL}/customer/${req.file.filename}`
        }]

        console.log({ customers })
        const savedCustomers = await CustomerArrayModel.create({
            // createdByCustomerId: customer,
            customers
        });
        return res.status(201).json({ message: 'Customers saved successfully', savedCustomers });
    } catch (error) {
        res.status(500).send({ error: ResponseMessages.INTERNAL_SERVER_ERROR })
    }
}






