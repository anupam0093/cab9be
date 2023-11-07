
import { CustomerRequest } from "../../../types/customer";
import newCustomer from "../../../models/customer"
import { ResponseMessages } from "../../../contants/response";

export const customerService = async (customerData: CustomerRequest) => {
    try {
        const response = await newCustomer.create(customerData)
        return response;
    } catch (error: any) {
        throw new Error(ResponseMessages?.DUPLICATE_ENTERIES)
    }
}