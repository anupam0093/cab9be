import { model, Schema, Document } from "mongoose";
const mongoose = require("mongoose");

export interface INewDriver extends Document {
    name: string,
    phone: string,
    alternatePhone: string,
    pan: string,
    aadharCardNumber: string,
    birthdate: string,
    joiningDate: string,
    driverAddress: [
        {
            type: string,
            address: string,
        }
    ],
    salaryPerMonth: string,
    dailyWages: string,
    branches: string,
    dailyWorkingHours: string,

    workingHours: {
        start: string,
        end: string,
    },
    allowances: {
        dailyAllowance: string,
        overTimePerHour: string,
        outstationAllowancePerDay: string,
        outstationOvernightAllowance: string,
        sundayAllowance: string,
        earlyStartAllowance: string,
        nightAllowance: string,

        extraDutyAllowance: {
            secondDuty: string,
            thirdDuty: string,
            fourthDupt: string,
            fifthDuty: string
        }
    },
    driverDeductions: [
        {
            name: string,
            amount: boolean,
        },
    ],
    licenseInformation: {
        number: string,
        validUpto: string
    },
    police: {
        displayCardNumber: string,
        displayCardExpiryDate: string,
        verificationNumber: string,
        verificationExpiryDate: string
    },
    badge: {
        badgeNumber: string,
        badgeExpiryDate: string
    },
    files: [
        {
            fileName: string,
            fileUrl: string
        }
    ],
    additionalInfo: string,
    driverCode: string,
}

const newDriver = new Schema<INewDriver>({
    name: {
        type: String,
        required: false
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
    pan: {
        type: String,
        required: false,
    },
    aadharCardNumber: {
        type: String,
        required: false,
    },
    birthdate: {
        type: String,
        required: false,
    },
    joiningDate: {
        type: String,
        required: false,
    },
    driverAddress: [
        {
            type: {
                type: String,
                required: false,
            },
            address: {
                type: String,
                required: false,
            },

        },
    ],
    salaryPerMonth: {
        type: String,
        required: false
    },
    dailyWages: {
        type: String,
        required: false
    },
    branches: {
        type: String,
        required: false
    },
    dailyWorkingHours: {
        type: String,
        required: false
    },
    workingHours: {
        start: {
            type: String,
            required: false
        },
        end: {
            type: String,
            required: false
        }
    },
    allowances: {
        dailyAllowance: {
            type: String,
            required: false
        },
        overTimePerHour: {
            type: String,
            required: false
        },
        outstationAllowancePerDay: {
            type: String,
            required: false
        },
        outstationOvernightAllowance: {
            type: String,
            required: false
        },
        sundayAllowance: {
            type: String,
            required: false
        },
        earlyStartAllowance: {
            type: String,
            required: false
        },
        nightAllowance: {
            type: String,
            required: false
        },
        extraDutyAllowance: {
            secondDuty: {
                type: String,
                required: false
            },
            thirdDuty: {
                type: String,
                required: false
            },
            fourthDupt: {
                type: String,
                required: false
            },
            fifthDuty: {
                type: String,
                required: false
            },
        }
    },

    driverDeductions: [
        {
            name: {
                type: String,
                required: false,
            },
            amount: {
                type: String,
                required: false,
            },
        },
    ],
    licenseInformation: {
        number: {
            type: String,
            required: false,
        },
        validUpto: {
            type: String,
            required: false
        }
    },
    police: {
        displayCardNumber: {
            type: String,
            required: false
        },
        displayCardExpiryDate: {
            type: String,
            required: false
        },
        verificationNumber: {
            type: String,
            required: false
        },
        verificationExpiryDate: {
            type: String,
            required: false
        }
    },
    badge: {
        badgeNumber: {
            type: String,
            required: false
        },
        badgeExpiryDate: {
            type: String,
            required: false
        }
    },

    files: [
        {
            fileName: {
                type: String,
                required: false,
            },
            fileUrl: {
                type: String,
                required: false,
            },
        }

    ],
    additionalInfo: {
        type: String,
        required: false
    },
    driverCode: {
        type: String,
        required: false
    }
}, { timestamps: true })

export default model<INewDriver>("drivers", newDriver);