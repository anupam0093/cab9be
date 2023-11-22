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
            default: false,
        },
        showDutyType: {
            type: Boolean,
            default: false,
        },
        shoeBookedByName: {
            type: Boolean,
            default: false,
        },
        showPassengerNames: {
            type: Boolean,
            default: false,
        },
        showVehicleGroupName: {
            type: Boolean,
            default: false,
        },
        showVehicleNumber: {
            type: Boolean,
            default: false,
        },
        showStarDate: {
            type: Boolean,
            default: false,
        },
        showEndDate: {
            type: Boolean,
            default: false,
        },
        showStartTime: {
            type: Boolean,
            default: false,
        },
        showEndTime: {
            type: Boolean,
            default: false,
        },
        showExtraHour: {
            type: Boolean,
            default: false,
        },
        showTotalHour: {
            type: Boolean,
            default: false,
        },
        showSpeedOmeterStartKM: {
            type: Boolean,
            default: false,
        },
        showSpeedOmeterEndKM: {
            type: Boolean,
            default: false,
        },
        showStartKM: {
            type: Boolean,
            default: false,
        },
        showEndKM: {
            type: Boolean,
            default: false,
        },
        showExtraKM: {
            type: Boolean,
            default: false,
        },
        showTotalKM: {
            type: Boolean,
            default: false,
        },
        showExtraHourRate: {
            type: Boolean,
            default: false,
        },
        showExtraKmRate: {
            type: Boolean,
            default: false,
        },
        showExtraHourCost: {
            type: Boolean,
            default: false,
        },
        showExtraKmCost: {
            type: Boolean,
            default: false,
        },
        showConsolidatedBillingTerms: {
            type: Boolean,
            default: false,
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
            default: false,
        },
        showQuantityNumberOfDays: {
            type: Boolean,
            default: false,
        },
        showTotalPrice: {
            type: Boolean,
            default: false,
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