import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const bookSchema = new Schema(
    {
        bookName: {
            type: String,
            required: true,
            trim: true,
        },
        bookID: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        bookImage: {
            type: String // cloudinary url
        },
        customer: [
            {
                type: Schema.Types.ObjectId,
                ref: "Customer"
            }
        ]

        // baseCost: {
        //     type: Number,
        //     req: true
        // },
        // fine: {
        //     type: Number,
        //     required: true
        // }
    },
    { timestamps: true }

)

bookSchema.plugin(mongooseAggregatePaginate)

export const Book = mongoose.model("Book", bookSchema)