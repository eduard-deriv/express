import PostModel from "./postModel.js";
import fileUpload from "./fileUpload.js";

class PostService {
    async create(post, picture) {
        const fileName = await fileUpload.saveFile(picture)
        const createdPost = await PostModel.create({...post, image: fileName});
        return createdPost;
    }

    async getAll() {
        const posts = await PostModel.find();
        return posts;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const post = await PostModel.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('не указан ID');
        }
        const updatedPost = await PostModel.findByIdAndUpdate(post._id, post, {new: true});
        return updatedPost;
    }

    async delete(id) {
        const post = await PostModel.findByIdAndDelete(id);
        return post;
    }
}


export default new PostService();