import express from "express"
import mongoose from "mongoose"
import postRouter from "./posts/postRouter.js"
import fileUpload from "express-fileupload";

const PORT = 3006
const DB_URL = 'mongodb+srv://ed:ed@cluster0.hfmcjzh.mongodb.net/?retryWrites=true&w=majority'

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