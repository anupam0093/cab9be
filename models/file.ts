import { model, Schema, Document } from "mongoose";
const mongoose = require('mongoose');


export interface IMultipleFile extends Document {
    customer: [
        {
            name: string,
            file: string
        },
    ],
    createdByCustomer: string
}


const mulitipleFileSchema = new Schema<IMultipleFile>({
    customer: [
        {

            name: {
                type: String,
                required: false,
            },
            file: {
                type: String,
                required: false
            }

        },
    ],
    createdByCustomer: { ref: "customers", type: mongoose.Schema.Types.ObjectId },
});

export default model<IMultipleFile>("files", mulitipleFileSchema)


