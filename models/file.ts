import { Document, Schema, model } from 'mongoose';
const mongoose = require('mongoose');


export interface Customer extends Document {
    name: string;
    image: string;
    createdByCustomer: string,
}

const customerSchema = new Schema<Customer>({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    createdByCustomer: { ref: "customers", type: mongoose.Schema.Types.ObjectId },
}, { timestamps: true });

const customerArraySchema = new Schema({
    customers: {
        type: [customerSchema],
        required: true,
    },
});

const CustomerArrayModel = model('CustomerFiles', customerArraySchema);

export default CustomerArrayModel;
