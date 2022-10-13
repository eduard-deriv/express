import express from "express"
import mongoose from "mongoose"
import postRouter from "./postRouter.js"
import fileUpload from "express-fileupload";

const PORT = 3009
const DB_URL = 'mongodb+srv://e:e@cluster0.u689o7h.mongodb.net/?retryWrites=true&w=majority'

const app = express()
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', postRouter)

async function startServer() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('server started on PORT =', PORT))
    } catch (e) {
        console.log(e.message)
    }
}

startServer()