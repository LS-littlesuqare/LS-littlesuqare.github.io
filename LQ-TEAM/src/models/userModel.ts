import { Schema, model } from 'mongoose';

interface User {
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<User>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

userSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

const UserModel = model<User>('User', userSchema);

export default UserModel;