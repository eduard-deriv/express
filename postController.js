import postService from "./postService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await postService.create(req.body, req.files.picture)
            res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getAll(req, res) {
        try {
            const posts = await postService.getAll()
            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const post = await postService.getOne(req.params.id)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await postService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({message: 'нету'})
            }
            const post = await postService.delete(req.params.id)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();