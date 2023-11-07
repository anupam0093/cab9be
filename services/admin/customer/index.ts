
import { CustomerRequest } from "../../../types/customer";
import newCustomer from "../../../models/customer"
import { ResponseMessages } from "../../../contants/response";

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