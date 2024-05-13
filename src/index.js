// require('dotenv').config({ path: './env' })
import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";
import { app } from './app.js'


dotenv.config({
    path: "./env"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`💻 Server is running on port : ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("MongoDB connection error !!", error);
    })

