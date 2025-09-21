export class AuthService {
    validateUser(username: string, password: string): boolean {
        // 这里可以添加用户验证逻辑，例如查询数据库
        return true; // 假设验证通过
    }

    generateToken(userId: string): string {
        // 这里可以添加生成JWT的逻辑
        return "generated_token"; // 返回一个假设的token
    }
}