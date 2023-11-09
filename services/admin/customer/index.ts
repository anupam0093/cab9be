
import { CustomerRequest } from "../../../types/customer";
import newCustomer from "../../../models/customer"
import { ResponseMessages } from "../../../contants/response";



// --------------------------------- CUSTOMER SERVICE  --------------------------------------- 
export const customerService = async (customerData: CustomerRequest, userId: string) => {
    try {
        const response = await newCustomer.create({
            ...customerData,
            createdByAdmin: userId as string
        })
        return response;
    } catch (error: any) {
        throw new Error(ResponseMessages?.DUPLICATE_ENTERIES)
    }
}


export const getCustomerByIdService = async (id: string) => {
    const response = await newCustomer.findById(id).select({ createdByAdmin: 0 });
    return response;
}

export const deleteCustomerByIdService = async (id: string) => {
    const response = await newCustomer.findByIdAndDelete(id)
    return response;
}

export const getAllCustomerService = async (userId: string) => {
    return await newCustomer.find({ createdByAdmin: userId })
}

// interface IDetails {
//     name: string;
//     price: string;
//     des: string;
// }

// const multipleFileUpload = async (files: any, details: IDetails) => {
//     if (!details.name || !details.price || !details.des) {
//         throw Error("all fields are required");
//     }
//     let filesArray: any = [];
//     files.forEach((element: any) => {
//         const file = {
//             fileName: element.originalname,
//             filePath: element.path,
//             fileType: element.mimetype,
//             fileSize: fileSizeFormatter(element.size, 2),
//         };
//         filesArray.push(file);
//     });

//     const multipleFiles = new MultipleFile({
//         name: details.name,
//         price: details.price,
//         des: details.des,
//         files: filesArray,
//     });
//     await multipleFiles.save();
//     return "Files Uploaded Successfully";
// };

// //check file size here...
// const fileSizeFormatter = (bytes: number, decimal: number) => {
//     if (bytes === 0) {
//         return "0 Bytes";
//     }
//     const dm = decimal || 2;
//     const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
//     const index = Math.floor(Math.log(bytes) / Math.log(1000));
//     return (
//         parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) +
//         " " +
//         sizes[index]
//     );
// };
// export default multipleFileUpload;