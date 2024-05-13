import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
// JSON data
app.use(express.json({
    limit: "16kb",
}))
// URL Data
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
// Static files
app.use(express.static("public"))
// Cookie parser
app.use(cookieParser())


export { app }
