import { registerUser, loginUser, getProfile, updateProfileService, addNotificationService, markNotificationRead } from "../services/user.service.js";


export async function register(req, res) {
    console.log("🔥 register() recibió:", req.body);

    try {
        const result = await registerUser(req.body);
        res.status(201).json({
            message: 'User registered Successfully',
            user: result.user,
            token: result.token
        })
    } catch (error) {
        console.error('X ERROR CONTROLLER REGISTER', error)
        res.status(400).json({ error: error.message });
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const result = await loginUser({ email, password });

        res.status(200).json({
            message: 'login successful',
            user: result.user,
            token: result.token
        });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

export async function profile(req, res) {
    try {
        const userId = req.user.id;

        const user = await getProfile(userId);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export async function updateProfile(req, res) {
    try {
        const userId = req.user.id;
        const updates = req.body;

        const updatedUser = await updateProfileService(userId, updates);

        res.status(200).json({
            message: 'Profile updated',
            user: updatedUser
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export async function addNotification(req, res) {
    try {
        const userId = req.user.id;
        const { message } = req.body;

        const notifications = await addNotificationService(userId, message);

        res.status(200).json({
            message: 'Notification added',
            notifications
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function markNotification(req, res) {
    try {
        const userId = req.user.id;
        const { notificationId } = req.params;

        const notifications = await markNotificationRead(userId, notificationId);

        res.status(200).json({
            message: 'Notification marked as read',
            notifications
        });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}