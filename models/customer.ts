import { model, Schema, Document } from "mongoose";
const mongoose = require('mongoose');

export interface INewCustomer extends Document {
    name: string;
    address: string,
    pincode: string,
    state: string,
    customerGroup: string,
    customerField: string,
    phone: string,
    alternatePhone: string,
    email: string,
    alternateEmail: string,
    pan: string,
    serviceTaxNumber: string,
    gstinNumber: string,
    gstType: string,
    tdsPercentage: number,
    reverseChargeApplicable: string,
    numberOfDays: number;
    surchargePercentage: number,
    defaultDiscount: number;
    defaultCarHireChargesDiscount: number,
    cityForFuelSurcharge: string,
    forcedFuelType: string,
    brances: string,
    defaultCompany: string,
    defaultTaxClassification: string,
    defaultFeedbackType: string,

    gstingBillingDetails: {
        billingName: string,
        billingAddress: string,
        state: string,
        useBillingNameOnInvoice: string,
        useBillingNameInTallyExport: string

    }
    bookingDutiesSettings: {
        citiesToAddBooking: [{
            name: string
        }],
        dutyType: [{
            name: string
        }],
        vehicleGroup: [{
            name: string
        }]
        appliedToBooking: [{
            name: string
        }],
        citiesTotalCostOnInvoice: [{
            name: string
        }]
        minimumGarageStart: [{

        }],
        minimumGarageEnd: [{

        }],
        additionalOptions: {
            option1: string;
            option2: string;
            option3: string;
            option4: string;
            option5: string;
            option6: string;
        },
        network: {
            option: string
        }

    },

    applicableTaxes: [
        taxes: {
            type: string,
            notAbleToCharge: boolean,
        },
    ],
    applicableInterstateTaxes: [
        taxes: {
            type: string,
            notAbleToCharge: boolean,
        },
    ],

    driverAllowanceSettings: [
        driver: {
            name: string,
            earlyTime: string,
            lateTime: string,
        }
    ],
    notes: string,
    invoiceTermsAndContions: string,
    customerCode: string,
    createdByAdmin: any
}

const newCustomer = new Schema<INewCustomer>({

    name: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        required: false,
    },
    customerGroup: {
        type: String,
        required: false,
    },
    customerField: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function (v: any) {
                var re = /^\d{10}$/;
                return !v || !v.trim().length || re.test(v);
            },
            message: "Provided mobile number is invalid.",
        },
    },
    alternatePhone: {
        type: String,
        required: true,
        validate: {
            validator: function (v: any) {
                var re = /^\d{10}$/;
                return !v || !v.trim().length || re.test(v);
            },
            message: "Provided mobile number is invalid.",
        },
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value: any) {
                var email =
                    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return !value || !value.trim().length || email.test(value);
            },
            message: "Provided email number is invalid",
        },
        unique: true,
    },
    alternateEmail: {
        type: String,
        required: true,
        validate: {
            validator: function (value: any) {
                var email =
                    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return !value || !value.trim().length || email.test(value);
            },
            message: "Provided email number is invalid",
        },
        unique: true,
    },
    pan: {
        type: String,
        required: false,
    },
    serviceTaxNumber: {
        type: String,
        required: false,
    },
    gstinNumber: {
        type: String,
        required: false,
    },
    gstType: {
        type: String,
        required: false,
    },
    tdsPercentage: {
        type: Number,
        required: false,
    },
    reverseChargeApplicable: {
        type: String,
        required: false,
    },
    numberOfDays: {
        type: Number,
        required: false,
    },
    surchargePercentage: {
        type: Number,
        required: false,
    },
    defaultDiscount: {
        type: Number,
        required: false,
    },
    defaultCarHireChargesDiscount: {
        type: Number,
        required: false,
    },
    cityForFuelSurcharge: {
        type: String,
        required: false,
    },
    forcedFuelType: {
        type: String,
        required: false,
    },
    brances: {
        type: String,
        required: false,
    },
    defaultCompany: {
        type: String,
        required: false,
    },
    defaultTaxClassification: {
        type: String,
        required: false,
    },
    defaultFeedbackType: {
        type: String,
        required: false,
    },

    gstingBillingDetails: {
        billingName: {
            type: String,
            required: false,
        },
        billingAddress: {
            type: String,
            required: false,
        },
        state: {
            type: String,
            required: false
        },
        useBillingNameOnInvoice: {
            type: String,
            required: false,
        },
        useBillingNameInTallyExport: {
            type: String,
            required: false,
        },
    },

    bookingDutiesSettings: {
        citiesToAddBooking: [
            {
                name: {
                    type: String,
                    required: false,
                }
            },
        ],
        dutyType: [
            {
                name: {
                    type: String,
                    required: false,
                }
            },
        ],
        vehicleGroup: [
            {
                name: {
                    type: String,
                    required: false,
                }
            },
        ],
        appliedToBooking: [
            {
                name: {
                    type: String,
                    required: false,
                }
            },
        ],
        citiesTotalCostOnInvoice: [
            {
                name: {
                    type: String,
                    required: false,
                }
            },
        ],
        minimumGarageStart: [
            {
                name: {
                    type: String,
                    required: false,
                }
            },
        ],
        minimumGarageEnd: [
            {
                name: {
                    type: String,
                    required: false,
                }
            },
        ],

        additionalOptions: {
            option1: {
                type: String,
                required: false,
            },
            option2: {
                type: String,
                required: false,
            },
            option3: {
                type: String,
                required: false,
            },
            option4: {
                type: String,
                required: false,
            },
            option5: {
                type: String,
                required: false,
            },
            option6: {
                type: String,
                required: false,
            },
        },

        network: {
            option: {
                type: String,
                required: false
            }
        }
    },

    applicableTaxes: [
        {
            taxes: {
                type: String,
                required: false,
            }
        },
    ],
    applicableInterstateTaxes: [
        {
            taxes: {
                type: String,
                required: false,
            }
        },
    ],
    driverAllowanceSettings: [
        {
            drver: {
                name: {
                    type: String,
                    required: false,
                },
                earlyTime: {
                    type: String,
                    required: false,
                },
                lateTime: {
                    type: String,
                    required: false,
                }

            }
        },
    ],

    notes: {
        type: String,
        required: false,
    },
    invoiceTermsAndContions: {
        type: String,
        required: false,
    },
    customerCode: {
        type: String,
        required: false
    },
    createdByAdmin: { ref: "users", type: mongoose.Schema.Types.ObjectId },
}, { timestamps: true })


export default model<INewCustomer>("customers", newCustomer)

