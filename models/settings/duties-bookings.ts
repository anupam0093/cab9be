import { Schema, Document, model } from "mongoose";
const mongoose = require("mongoose");


export interface IDutiesBookings extends Document {
    allowBookings: Boolean,
    useBookingIdInSMS: Boolean,
    roundOffDutySlip: Boolean,
    autoSendNotification: Boolean,
    hideCustomerName: Boolean,
    allowAllotmentDriverVehicleExpired: Boolean,
    enabledCloseDuty: Boolean,
    autoSelectCompany: Boolean,
    markNewBookings: Boolean

    dutyRouteLogFetchInterval: string,
    defaultStartFromGarage: string,
    printedDutySlip: Date,

    bookingFormCustomisation: {
        hideFieldStartFromGarage: Boolean,
        hideDispatchCCenter: Boolean,
        hideBill: Boolean,
        makeReportingAddressMandatory: Boolean
    },

    dutiesListing: {
        showGarage: Boolean,
        showFromCity: Boolean,
        showDropAddress: Boolean,
        showRemarks: Boolean,
        showOperatorNotes: Boolean,
        showVehicleGroup: Boolean,
        showlables: Boolean,
        showEstimatedDropOffTime: Boolean
    },

    bookingConfirmationSmsEmail: {
        addCustomerNameAddressToEmail: Boolean,
        addBookingRemarksToEmail: Boolean,
        addBookingBasePricing: Boolean
    },

    defaultOptionsForDutySmsEmail: {

        toSupplier: {
            addRemark: Boolean,
            addCustomerNameInEmail: Boolean,
            hidePassengerPhoneNumberToSmsEmail: Boolean,
            attachDutySlipInEmail: Boolean,
            addEntireBookingDates: Boolean
        },

        toDriver: {
            addVehicleDetailsToSMS: Boolean,
            addGarageStartTimeToSms: Boolean,
            addBookingRemarksToSms: Boolean,
            addEntireBookingDate: Boolean
        },

        toCustomer: {
            hideVehicleNameFromEmailAndSms: Boolean,
            addBookingRemarkToEmailAndSms: Boolean,
            addTextDetailsUpdated: Boolean,
            sendSingleEmail: Boolean,
        },

    }

    defaultOptionsForDutySlipPrinting: {
        addCustomerName: Boolean,
        addBookedByName: Boolean,
        addAllPassengerNamesNumbers: Boolean,
        hideDutyTypeName: Boolean,
        hideVehicleGroupName: Boolean,
        hideVehicleName: Boolean,
        hideRemarks: Boolean,
        addGarageStartTime: Boolean,
        addReleasedKMTimeSection: Boolean,
        addEntireBookingDateRange: Boolean,
        addPrintedInformationFooter: Boolean,
        alwaysUseFullPageDesign: Boolean,
        hideBillingTerms: Boolean,
        hideAllowances: Boolean,
        showSpeedKm: Boolean,
        hideFuelSurcharge: Boolean,
        printAssociateDutySlip: Boolean
    },

    briefingSheetTermsConditions: Boolean,

    enableStartDutyOtpVerification: Boolean,
    enableStopDutyOtpVerification: Boolean,

    garageTimeSettingsDuty: {
        minimumGarageStartTime: Date,
        minimumGarageEndTime: Date
    },

    enableButtonForDrivers: Boolean,
    createdByAdmin: string
}


const newDutiesBookings = new Schema<IDutiesBookings>({
    allowBookings: {
        type: Boolean,
        default: true,
    },
    useBookingIdInSMS: {
        type: Boolean,
        default: false,
    },
    roundOffDutySlip: {
        type: Boolean,
        default: true,
    },
    autoSendNotification: {
        type: Boolean,
        default: false,
    },
    hideCustomerName: {
        type: Boolean,
        default: false,
    },
    allowAllotmentDriverVehicleExpired: {
        type: Boolean,
        default: false,
    },
    enabledCloseDuty: {
        type: Boolean,
        default: false,
    },
    autoSelectCompany: {
        type: Boolean,
        default: false,
    },
    markNewBookings: {
        type: Boolean,
        default: false,
    },
    dutyRouteLogFetchInterval: {
        type: String,
    },
    defaultStartFromGarage: {
        type: String,
    },
    printedDutySlip: {
        type: Date,
    },
    bookingFormCustomisation: {
        hideFieldStartFromGarage: {
            type: Boolean,
            default: false,
        },
        hideDispatchCCenter: {
            type: Boolean,
            default: false,
        },
        hideBill: {
            type: Boolean,
            default: false,
        },
        makeReportingAddressMandatory: {
            type: Boolean,
            default: false,
        }
    },

    dutiesListing: {
        showGarage: {
            type: Boolean,
            default: false,
        },
        showFromCity: {
            type: Boolean,
            default: true,
        },
        showDropAddress: {
            type: Boolean,
            default: false,
        },
        showRemarks: {
            type: Boolean,
            default: false,
        },
        showOperatorNotes: {
            type: Boolean,
            default: false,
        },
        showVehicleGroup: {
            type: Boolean,
            default: false,
        },
        showlables: {
            type: Boolean,
            default: false,
        },
        showEstimatedDropOffTime: {
            type: Boolean,
            default: false,
        }
    },

    bookingConfirmationSmsEmail: {
        addCustomerNameAddressToEmail: {
            type: Boolean,
            default: false,
        },
        addBookingRemarksToEmail: {
            type: Boolean,
            default: false,
        },
        addBookingBasePricing: {
            type: Boolean,
            default: false,
        }
    },

    defaultOptionsForDutySmsEmail: {
        toSupplier: {
            addRemark: {
                type: Boolean,
                default: false,
            },
            addCustomerNameInEmail: {
                type: Boolean,
                default: false,
            },
            hidePassengerPhoneNumberToSmsEmail: {
                type: Boolean,
                default: false,
            },
            attachDutySlipInEmail: {
                type: Boolean,
                default: false,
            },
            addEntireBookingDates: {
                type: Boolean,
                default: false,
            }

        },

        toDriver: {
            addVehicleDetailsToSMS: {
                type: Boolean,
                default: false,
            },
            addGarageStartTimeToSms: {
                type: Boolean,
                default: false,
            },
            addBookingRemarksToSms: {
                type: Boolean,
                default: false,
            },
            addEntireBookingDate: {
                type: Boolean,
                default: false,
            }

        },
        toCustomer: {
            hideVehicleNameFromEmailAndSms: {
                type: Boolean,
                default: false,
            },
            addBookingRemarkToEmailAndSms: {
                type: Boolean,
                default: false,
            },
            addTextDetailsUpdated: {
                type: Boolean,
                default: false,
            },
            sendSingleEmail: {
                type: Boolean,
                default: false,
            }
        }
    },

    defaultOptionsForDutySlipPrinting: {
        addCustomerName: {
            type: Boolean,
            default: false,
        },
        addBookedByName: {
            type: Boolean,
            default: false,
        },
        addAllPassengerNamesNumbers: {
            type: Boolean,
            default: false,
        },
        hideDutyTypeName: {
            type: Boolean,
            default: false,
        },
        hideVehicleGroupName: {
            type: Boolean,
            default: false,
        },
        hideVehicleName: {
            type: Boolean,
            default: false,
        },
        hideRemarks: {
            type: Boolean,
            default: false,
        },
        addGarageStartTime: {
            type: Boolean,
            default: false,
        },
        addReleasedKMTimeSection: {
            type: Boolean,
            default: false,
        },
        addEntireBookingDateRange: {
            type: Boolean,
            default: false,
        },
        addPrintedInformationFooter: {
            type: Boolean,
            default: false,
        },
        alwaysUseFullPageDesign: {
            type: Boolean,
            default: false,
        },
        hideBillingTerms: {
            type: Boolean,
            default: false,
        },
        hideAllowances: {
            type: Boolean,
            default: false,
        },
        showSpeedKm: {
            type: Boolean,
            default: false,
        },
        hideFuelSurcharge: {
            type: Boolean,
            default: false,
        },
        printAssociateDutySlip: {
            type: Boolean,
            default: false,
        }
    },

    briefingSheetTermsConditions: {
        type: Boolean,
        default: false,
    },

    enableStartDutyOtpVerification: {
        type: Boolean,
        default: false,
    },
    enableStopDutyOtpVerification: {
        type: Boolean,
        default: false,
    },

    garageTimeSettingsDuty: {
        minimumGarageStartTime: {
            type: Date,
            default: false,
        },
        minimumGarageEndTime: {
            type: Date,
            default: false,
        }
    },
    enableButtonForDrivers: {
        type: Boolean,
        default: false,
    },
    createdByAdmin: { ref: "users", type: mongoose.Schema.Types.ObjectId },
}, { timestamps: true })

export default model<IDutiesBookings>("settings-duties-bookings", newDutiesBookings)