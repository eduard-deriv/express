import mongoose from "mongoose";

const PostModel = new mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    image: {type: String},
})

export default mongoose.model('PostModel', PostModel)