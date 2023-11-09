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

export const handleFileController = async (req: Request, res: Response) => {
    try {
        const loggedInUser = req.user
        const customer = await Customer.findOne(loggedInUser?.id).select({ _id: 1 })
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ success: false, message: ResponseMessages?.FIELD_REQUIRED })
        }

        if (req.file == undefined) {
            return res.status(400).send({ message: ResponseMessages.IMAGE });
        }

        const customers = [{
            name: name,
            image: `http://localhost:8080/customer/${req.file.filename}`,
            createdByCustomer: customer
        }]
        const savedCustomers = await CustomerArrayModel.create({ customers });
        return res.status(201).json({ message: 'Customers saved successfully', savedCustomers });
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error! Try again, please!' })
    }
}


// router.post("/course/image-upload", upload.single("image"), async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).send({
//                 success: false,
//                 message: "IMAGE is required",
//             });
//         }
//         const imageUploadUrl = await resizeImageAndUpload(req.file, "image");
//         console.log({ imageUploadUrl })

//         res.send(imageUploadUrl);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });





