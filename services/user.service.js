import User from '../models/User.model.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';


function generateToken(user) {
    if (!JWT_SECRET || JWT_SECRET === 'tu_super_secreto_aqui') {
        console.warn('⚠️ Using default JWT secret — set process.env.JWT_SECRET for production.');
    }

    const payload = {
        sub: user._id.toString(),
        role: user.role
    };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

export async function registerUser({ name, email, password, role }) {
    const user = await User.createUser({ name, email, password, role });
    const token = generateToken(user);

    return { user, token };
}

export async function loginUser({ email, password }) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = generateToken(user);

    return { user, token };
};

export async function getProfile(userId) {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');

    return user;
};

export async function updateProfileService(userId, updates) {
    const updateData = {};

    if (updates.name) updateData.name = updates.name;

    if (updates.email) {
        const existing = await User.findOne({ email: updates.email }).collation({ locale: 'en', strength: 2 });
        if (existing && existing._id.toString() !== userId) throw new Error('Email already registered');

        updateData.email = updates.email;
    }

    if (updates.password) {
        const user = await User.findById(userId);
        if (!user) throw new Error('user not found');

        if (updateData.name) user.name = updateData.name;
        if (updateData.email) user.email = updateData.email;

        user.passwordHash = updates.password;
        await user.save();
        return user;
    }
    const user = await User.findByIdAndUpdate(
        userId,
        { $set: updateData },
        { new: true, runValidators: true }
    );

    if (!user) throw new Error('user not found');

    return user;

}

export async function addNotificationService(userId, message) {
    const user = await User.addNotification(userId, message);
    if (!user) throw new Error('User not found')

    return user.notifications;
}

export async function markNotificationRead(userId, index) {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');

    if (index < 0 || index >= user.notifications.length) {
        throw new Error('Notification not found');
    }

    user.notifications[index].read = true;
    await user.save();

    return user.notifications;
}