import { model, Schema, Document } from "mongoose"
const mongoose = require("mongoose")


export interface INewVehicle extends Document {
    modelName: string,
    vehicleNumber: string,
    avatar: string,
    colour: string,
    fuelType: string,
    seatingCapacity: number,
    assignedDriver: string,
    categoryVehicleGroup: string,
    branches: string,
    vehicleCode: string,
    loan: {
        emiAmount: number,
        startDate: Date,
        endDate: Date,
        bankName: string,
        emiDay: number
    },
    registration: {
        registeredOwnerName: string,
        registrationDate: Date
    },
    parts: {
        chassisNumber: string,
        engineNumber: string
    },
    insurance: {
        companyName: string,
        policyNumber: string,
        issueDate: Date,
        dueDate: Date,
        premiumAmount: number,
        coverAmount: number
    },
    rto: {
        address: string,
        taxEfficiency: string,
        expiryDate: Date
    },
    fitness: {
        number: number,
        expiryDate: Date
    },
    authorization: {
        number: number,
        expiryDate: Date
    },
    speedGoverner: {
        details: string,
        expiryDate: Date
    },
    puc: {
        number: number,
        expiryDate: Date
    },
    permits: [
        {
            type: string,
            expiryDate: Date
        }
    ],
    files: [
        {
            fileName: string,
            fileUrl: string
        }
    ],
    createdByAdmin: string
}

const newVehicle = new Schema<INewVehicle>({

    modelName: {
        type: String,
        required: false
    },
    vehicleNumber: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        uppercase: true,
        validate: {
            validator: function (value: any) {
                const vehicleNumberRegex = /^[A-Z0-9]{1,10}$/;
                return vehicleNumberRegex.test(value);
            },
            message: 'Please enter a valid vehicle number',
        },
    },
    avatar: {
        type: String,
        required: false
    },
    colour: {
        type: String,
        required: false
    },
    fuelType: {
        type: String,
        required: false
    },
    seatingCapacity: {
        type: Number,
        required: false
    },
    assignedDriver: {
        type: String,
        required: false
    },
    categoryVehicleGroup: {
        type: String,
        required: false
    },
    branches: {
        type: String,
        required: false
    },
    vehicleCode: {
        type: String,
        required: false
    },
    loan: {
        emiAmount: {
            type: Number,
            required: false
        },
        startDate: {
            type: Date,
            required: false
        },
        endDate: {
            type: Date,
            required: false
        },
        bankName: {
            type: String,
            required: false
        },
        emiDay: {
            type: Number,
            required: false
        }
    },
    registration: {
        registeredOwnerName: {
            type: String,
            required: false
        },
        registrationDate: {
            type: Date,
            required: false
        }
    },
    parts: {
        chassisNumber: {
            type: String,
            required: false
        },
        engineNumber: {
            type: String,
            required: false
        }
    },
    insurance: {
        companyName: {
            type: String,
            required: false,
        },
        policyNumber: {
            type: String,
            required: false,
        },
        issueDate: {
            type: Date,
            required: false
        },
        premiumAmount: {
            type: Number,
            required: false
        },
        coverAmount: {
            type: Number,
            required: false
        }
    },

    rto: {
        address: {
            type: String,
            required: false
        },
        taxEfficiency: {
            type: String,
            required: false
        },
        expiryDate: {
            type: Date,
            required: false
        }
    },
    fitness: {
        number: {
            type: Number,
            required: false
        },
        expiryDate: {
            type: Date,
            required: false
        }
    },
    authorization: {
        number: {
            type: Number,
            required: false
        },
        expiryDate: {
            type: Date,
            required: false
        }
    },
    speedGoverner: {
        details: {
            type: String,
            required: false
        },
        expiryDate: {
            type: Date,
            required: false
        }
    },
    puc: {
        number: {
            type: Number,
            required: false
        },
        expiryDate: {
            type: Date,
            required: false
        }
    },
    permits: [
        {
            type: {
                type: String,
                required: false
            },
            expiryDate: {
                type: Date,
                required: false
            }
        }
    ],
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
    createdByAdmin: { ref: "users", type: mongoose.Schema.Types.ObjectId },
}, { timestamps: true })

export default model<INewVehicle>("vehicles", newVehicle)