import { Schema, Document, model } from "mongoose";
const { mongoose } = require("mongoose")

export interface Purchase extends Document {
    showPurchaseDutySummary: Boolean,
    showDutyId: Boolean,
    showDutyType: Boolean,
    showCustomerName: Boolean,
    showBookedByName: Boolean,
    showPassengerNames: Boolean,
    showVehicleGroupName: Boolean,
    showVehicleNumber: Boolean,
    showStartDate: Boolean,
    showEndDate: Boolean,
    showStartTime: Boolean,
    showEndTime: Boolean,
    showExtraHour: Boolean,
    showTotalHour: Boolean,
    showStartKm: Boolean,
    showEndKm: Boolean,
    showTotalKm: Boolean,
    showExtraHourRate: Boolean,
    showExtraKmRate: Boolean,
    showExtraHourCost: Boolean,
    showExtraKmCost: Boolean,
    showConsolidatedBillingTerms: Boolean,
    showSepratedBillingTerms: Boolean,
    showAllowances: Boolean,
    showPrice: Boolean,
    showDutysubtotal: Boolean,
    showCustomerCarHireCharges: Boolean,
    showCustomerCarHireChargesIncludingAllowance: Boolean,
    showCustomerDutySubtotal: Boolean,
    showCustomerDutySubtotalIncludingAllowance: Boolean,
    createdByAdmin: string

}

const purchaseSchema = new Schema<Purchase>({
    showPurchaseDutySummary: {
        type: Boolean,
        default: false
    },
    showDutyId: {
        type: Boolean,
        default: true
    },
    showCustomerName: {
        type: Boolean,
        default: true
    },
    showBookedByName: {
        type: Boolean,
        default: true
    },
    showPassengerNames: {
        type: Boolean,
        default: true
    },
    showVehicleGroupName: {
        type: Boolean,
        default: false
    },
    showVehicleNumber: {
        type: Boolean,
        default: true
    },
    showStartDate: {
        type: Boolean,
        default: true
    },
    showEndDate: {
        type: Boolean,
        default: true
    },
    showStartTime: {
        type: Boolean,
        default: true
    },
    showEndTime: {
        type: Boolean,
        default: true
    },
    showExtraHour: {
        type: Boolean,
        default: true
    },
    showTotalHour: {
        type: Boolean,
        default: true
    },
    showStartKm: {
        type: Boolean,
        default: true
    },
    showEndKm: {
        type: Boolean,
        default: true
    },
    showTotalKm: {
        type: Boolean,
        default: true
    },
    showExtraHourRate: {
        type: Boolean,
        default: true
    },
    showExtraKmRate: {
        type: Boolean,
        default: true
    },
    showExtraHourCost: {
        type: Boolean,
        default: true
    },
    showExtraKmCost: {
        type: Boolean,
        default: true
    },
    showConsolidatedBillingTerms: {
        type: Boolean,
        default: false
    },
    showSepratedBillingTerms: {
        type: Boolean,
        default: false
    },
    showAllowances: {
        type: Boolean,
        default: false
    },
    showPrice: {
        type: Boolean,
        default: true
    },
    showDutysubtotal: {
        type: Boolean,
        default: false
    },
    showCustomerCarHireCharges: {
        type: Boolean,
        default: false
    },
    showCustomerCarHireChargesIncludingAllowance: {
        type: Boolean,
        default: false
    },
    showCustomerDutySubtotal: {
        type: Boolean,
        default: false
    },
    showCustomerDutySubtotalIncludingAllowance: {
        type: Boolean,
        default: false
    },
    createdByAdmin: { ref: "users", type: mongoose.Schema.Types.ObjectId },
}, { timestamps: true })

export default model<Purchase>("purchase", purchaseSchema)