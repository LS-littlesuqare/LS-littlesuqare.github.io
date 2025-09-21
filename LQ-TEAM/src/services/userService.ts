export class UserService {
    private users: any[] = []; // This will hold user data temporarily

    findById(userId: string) {
        return this.users.find(user => user.id === userId);
    }

    update(userId: string, updatedData: any) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
            return this.users[userIndex];
        }
        return null;
    }
}