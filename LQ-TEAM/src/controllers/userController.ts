export class UserController {
    async getUser(req, res) {
        // 处理获取用户信息的请求
        const userId = req.params.id;
        // 假设我们有一个用户服务来获取用户信息
        const user = await userService.findById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: '用户未找到' });
        }
    }

    async updateUser(req, res) {
        // 处理更新用户信息的请求
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = await userService.update(userId, userData);
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(400).json({ message: '更新失败' });
        }
    }
}