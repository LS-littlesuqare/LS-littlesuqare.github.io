export class PostService {
    private posts: any[] = [];

    create(post: any) {
        this.posts.push(post);
        return post;
    }

    findAll() {
        return this.posts;
    }
}