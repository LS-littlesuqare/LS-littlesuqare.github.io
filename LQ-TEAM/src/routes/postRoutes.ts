import { Router } from 'express';
import PostController from '../controllers/postController';

const router = Router();
const postController = new PostController();

export function setPostRoutes(app) {
    app.use('/api/posts', router);
    router.post('/', postController.createPost.bind(postController));
    router.get('/', postController.getPosts.bind(postController));
    router.delete('/:id', postController.deletePost.bind(postController));
}