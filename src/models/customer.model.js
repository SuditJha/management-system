import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        books: [
            {
                type: Schema.Types.ObjectId,
                ref: "Book"
            }
        ]
    }
)

export const Customer = mongoose.model("Customer", customerSchema)