import mongoose from "mongoose";

const PostModel = new mongoose.Schema({
    "author": {type: String, required: true},
    "title": {type: String, required: true},
    "description": {type: String, required: true},
    "picture": {type: String}
})

export default mongoose.model('PostModel', PostModel)