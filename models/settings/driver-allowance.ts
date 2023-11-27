import { model, Schema, Document } from "mongoose";
const mongoose = require("mongoose");

export interface DriverAllowance extends Document {
    driverAllowances: [
        {
            selectAllowanceType: string,
            chargedToCustomer: Boolean,
            amount: number
        }
    ],
    earlyStartTime: string,
    lateEndTime: string,
    createdByAdmin: string
}

const newDriverAllowance = new Schema<DriverAllowance>({
    driverAllowances: [
        {
            selectAllowanceType: {
                type: String,
                required: false
            },
            chargedToCustomer: {
                type: Boolean,
                default: true
            },
            amount: {
                type: Number,
                required: false
            }
        }
    ],
    earlyStartTime: {
        type: String,
        required: false
    },
    lateEndTime: {
        type: String,
        required: false
    },
    createdByAdmin: { ref: "users", type: mongoose.Schema.Types.ObjectId },
}, { timestamps: true })

export default model<DriverAllowance>("driver-allowance", newDriverAllowance)