import { Document, Schema, model } from 'mongoose';
const mongoose = require('mongoose');


export interface Customer extends Document {
    name: string;
    image: string;
}

interface CustomerWithCreator extends Document {
    createdByCustomerId: string;
    customers: Customer[];
}

const customerSchema = new Schema<CustomerWithCreator>({
    createdByCustomerId: { ref: "customers", type: mongoose.Schema.Types.ObjectId },
    customers: [
        {
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
        },
    ],
});

// const customerSchema = new Schema<Customer>({
//     name: {
//         type: String,
//         required: true,
//     },
//     image: {
//         type: String,
//         required: true,
//     },
//     createdByCustomer: { ref: "customers", type: mongoose.Schema.Types.ObjectId },
// }, { timestamps: true });

// const customerArraySchema = new Schema({
//     customers: {
//         type: [customerSchema],
//         required: true,
//     },
// });

const CustomerModel = model<CustomerWithCreator>('files', customerSchema);
// const CustomerArrayModel = model('CustomerFiles', customerArraySchema);

export default CustomerModel;
