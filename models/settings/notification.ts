import { model, Schema, Document } from "mongoose";
const mongoose = require("mongoose")

export interface Notifications extends Document {
    sms: {
        enabled: Boolean,
        phoneNumbers: string[]
    },
    email: {
        enabled: Boolean,
        emailAddress: string[]
    },
    createdByAdmin: string
}

const NotificationSchema = new Schema<Notifications>({
    sms: {
        enabled: {
            type: Boolean,
            default: false
        },
        phoneNumbers: [
            {
                type: String,
                required: false
            }

        ]
    },
    email: {
        enabled: {
            type: Boolean,
            default: false
        },
        emailAddress: [
            {
                type: String,
                required: false
            }
        ]
    },
    createdByAdmin: { ref: "users", type: mongoose.Schema.Types.ObjectId },
}, { timestamps: true })

export default model<Notifications>("notification", NotificationSchema)