import { Schema, Document, model } from "mongoose";
const mongoose = require("mongoose");

export interface SettingsBilling extends Document {
    invoiceDatesNumbering: string,
    receiptDatesNumbering: string,
    creditDebitNoteNumbering: string,

    billingOptions: {
        roundOffExtraTime: Boolean,
        showPerKilometer: Boolean,
        hideVehicleNumberFromInvoice: Boolean,
        showDutySummary: Boolean,
        tallySalesVoucher: Boolean
    },

    invoiceDutySummaryColumns: {
        showDutyId: Boolean,
        showDutyType: Boolean,
        shoeBookedByName: Boolean,
        showPassengerNames: Boolean,
        showVehicleGroupName: Boolean,
        showVehicleNumber: Boolean,
        showStarDate: Boolean,
        showEndDate: Boolean,
        showStartTime: Boolean,
        showEndTime: Boolean,
        showExtraHour: Boolean,
        showTotalHour: Boolean,
        showSpeedOmeterStartKM: Boolean,
        showSpeedOmeterEndKM: Boolean,
        showStartKM: Boolean,
        showEndKM: Boolean
        showExtraKM: Boolean,
        showTotalKM: Boolean,
        showExtraHourRate: Boolean,
        showExtraKmRate: Boolean,
        showExtraHourCost: Boolean
        showExtraKmCost: Boolean,
        showConsolidatedBillingTerms: Boolean,
        showSepratedBillingTerms: Boolean,
        showAllowances: Boolean,
        showPrice: Boolean,
        showQuantityNumberOfDays: Boolean,
        showTotalPrice: Boolean,
        showCarHireCharge: Boolean,
        showDutySubtotal: Boolean,
        showDutySubtotalIncludingAllowances: Boolean
    },
    fontSizeForInvoiceDescription: number,
    fontSizeOfDutySummary: number,
    disableEditingForInvoiceBefore: Date,
    createdByAdmin: string
}

const billingSchema = new Schema<SettingsBilling>({
    invoiceDatesNumbering: {
        type: String,
        required: false,
    },
    receiptDatesNumbering: {
        type: String,
        required: false,
    },
    creditDebitNoteNumbering: {
        type: String,
        required: false,
    },

    billingOptions: {
        roundOffExtraTime: {
            type: Boolean,
            default: false
        },
        showPerKilometer: {
            type: Boolean,
            default: false
        },
        hideVehicleNumberFromInvoice: {
            type: Boolean,
            default: false
        },
        showDutySummary: {
            type: Boolean,
            default: false
        },
        tallySalesVoucher: {
            type: Boolean,
            default: false
        }
    },
    invoiceDutySummaryColumns: {
        showDutyId: {
            type: Boolean,
            default: true,
        },
        showDutyType: {
            type: Boolean,
            default: true,
        },
        shoeBookedByName: {
            type: Boolean,
            default: true,
        },
        showPassengerNames: {
            type: Boolean,
            default: true,
        },
        showVehicleGroupName: {
            type: Boolean,
            default: false,
        },
        showVehicleNumber: {
            type: Boolean,
            default: true,
        },
        showStarDate: {
            type: Boolean,
            default: true,
        },
        showEndDate: {
            type: Boolean,
            default: true,
        },
        showStartTime: {
            type: Boolean,
            default: true,
        },
        showEndTime: {
            type: Boolean,
            default: true,
        },
        showExtraHour: {
            type: Boolean,
            default: true,
        },
        showTotalHour: {
            type: Boolean,
            default: true,
        },
        showSpeedOmeterStartKM: {
            type: Boolean,
            default: true,
        },
        showSpeedOmeterEndKM: {
            type: Boolean,
            default: true,
        },
        showStartKM: {
            type: Boolean,
            default: true,
        },
        showEndKM: {
            type: Boolean,
            default: true,
        },
        showExtraKM: {
            type: Boolean,
            default: true,
        },
        showTotalKM: {
            type: Boolean,
            default: true,
        },
        showExtraHourRate: {
            type: Boolean,
            default: true,
        },
        showExtraKmRate: {
            type: Boolean,
            default: true,
        },
        showExtraHourCost: {
            type: Boolean,
            default: true,
        },
        showExtraKmCost: {
            type: Boolean,
            default: true,
        },
        showConsolidatedBillingTerms: {
            type: Boolean,
            default: true,
        },
        showSeparatedBillingTerms: {
            type: Boolean,
            default: false,
        },
        showAllowances: {
            type: Boolean,
            default: false,
        },
        showPrice: {
            type: Boolean,
            default: true,
        },
        showQuantityNumberOfDays: {
            type: Boolean,
            default: false,
        },
        showTotalPrice: {
            type: Boolean,
            default: true,
        },
        showCarHireCharge: {
            type: Boolean,
            default: false,
        },
        showDutySubtotal: {
            type: Boolean,
            default: false,
        },
        showDutySubtotalIncludingAllowances: {
            type: Boolean,
            default: false,
        },
    },

    fontSizeForInvoiceDescription: {
        type: Number,
        required: false,
    },
    fontSizeOfDutySummary: {
        type: Number,
        required: false,
    },
    disableEditingForInvoiceBefore: {
        type: Date,
        required: false
    },
    createdByAdmin: { ref: "users", type: mongoose.Schema.Types.ObjectId },
}, { timestamps: true })

export default model<SettingsBilling>("billing", billingSchema)