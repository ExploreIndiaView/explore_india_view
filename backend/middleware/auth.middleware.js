import jwt from 'jsonwebtoken'
import User from '../models/auth.model.js'
const ProtectRoute = async (req, res, next) => {
    try {
        // get Token 
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "No authentication token, access denied" });
        }

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({ message: "Invalid token, access denied" });
        }
        req.user = user;
        next();

    } catch (error) {
        console.log("Error in Protected Route : ", error);
        next(error);
    }
}

export default ProtectRoute;

export const requireAdmin = async (req, res, next) => {
    try {
        const currentUser = req.user;
        const isAdmin = process.env.ADMIN_NUMBERS.includes(currentUser.mobile);

        if (!isAdmin) {
            return res.status(401).json({ message: "Unauthorized - User is not an admin", currentUser });
        }
        req.user = currentUser;
        next();

    } catch (error) {
        next(error);
    }
}