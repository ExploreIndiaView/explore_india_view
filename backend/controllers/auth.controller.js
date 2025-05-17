import User from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const twilioClient = new twilio(accountSid, authToken);

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" });
}

// SignUp controller
export const signUp = async (req, res, next) => {
    try {
        const { fullname, password, mobile } = req.body;

        if (!fullname || !password || !mobile) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // check if user already exists
        const existingUser = await User.findOne({ mobile });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({
            fullname,
            password,
            mobile,
            isVerified: true, // Set to true for new users
        });

        await newUser.save();
        // send OTP to mobile number (you can use a service like Twilio or Nexmo for this)
        // let messageOptions = {
        //     body: `Your OTP for Explore-India-View is ${otp}. Please verify your mobile number.`,
        //     from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
        //     to: mobile, // The user's mobile number
        // }
        // await twilioClient.messages.create(messageOptions)
        //     .then(message => console.log("OTP sent successfully:", message.sid))
        //     .catch(error => {
        //         console.error("Error sending OTP:", error);
        //         return res.status(500).json({ message: "Error sending OTP" });
        //     });

        const token = generateToken(newUser._id); // Assuming you have a method to generate a token
        return res.status(200).json({
            message: "User created successfully",
            user: {
                id: newUser._id,
                fullname: newUser.fullname,
                mobile: newUser.mobile,
                isVerified: newUser.isVerified,
                CashbackAmount: newUser.CashbackAmount
            },
            token, // Send the token back to the client
        });
    } catch (error) {
        console.log("Error in signUp controller:", error);
        next(error);
    }
}

// Verify OTP controller
export const verifyOTP = async (req, res, next) => {
    try {
        const { mobile, otp } = req.body;

        if (!mobile || !otp) {
            return res.status(400).json({ message: "Mobile number and OTP are required" });
        }

        // check if user exists
        const user = await User.findOne({ mobile });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // if user is already verified
        if (user.isVerified) {
            return res.status(400).json({ message: "User already verified" });
        }

        // check if OTP is correct
        if (user.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        // update user to verified
        user.isVerified = true;
        user.otp = null; // Clear OTP after verification
        await user.save();
        const token = generateToken(user._id); // Assuming you have a method to generate a token

        return res.status(200).json({
            message: "OTP verified successfully",
            user: {
                id: user._id,
                fullname: user.fullname,
                mobile: user.mobile,
                isVerified: user.isVerified,
                CashbackAmount: user.CashbackAmount
            },
            token, // Send the token back to the client
        });
    } catch (error) {
        console.log("Error in verifyOTP controller:", error);
        next(error);
    }
}

export const resendOTP = async (req, res, next) => {
    try {
        const { mobile } = req.body;

        if (!mobile) {
            return res.status(400).json({ message: "Mobile number is required" });
        }

        // check if user exists
        const user = await User.findOne({ mobile });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.isVerified) {
            return res.status(400).json({ message: "User already verified" });
        }

        // generate new OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP

        // send OTP to mobile number (you can use a service like Twilio or Nexmo for this)
        let messageOptions = {
            body: `Your OTP for Explore-India-View is ${otp}. Please verify your mobile number.`,
            from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
            to: mobile, // The user's mobile number
        }
        await twilioClient.messages.create(messageOptions)
            .then(message => console.log("OTP sent successfully:", message.sid))
            .catch(error => {
                console.error("Error sending OTP:", error);
                return res.status(500).json({ message: "Error sending OTP" });
            });

        // update user with new OTP
        user.otp = otp;
        await user.save();

        return res.status(200).json({
            message: "New OTP sent successfully",
            user: {
                id: user._id,
                fullname: user.fullname,
                mobile: user.mobile,
                isVerified: user.isVerified,
            },
        });
    } catch (error) {
        console.log("Error in resendOTP controller:", error);
        next(error);
    }
}

// reset password controller to-do
export const resetPassword = async (req, res, next) => {
    try {

    } catch (error) {
        console.log("Error in resetPassword controller:", error);
        next(error);
    }
}

// Login controller
export const signIn = async (req, res, next) => {
    try {
        const { mobile, password } = req.body;

        if (!mobile || !password) {
            return res.status(400).json({ message: "Mobile number and password are required" });
        }

        // check if user exists
        const user = await User.findOne({ mobile });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // check if password is correct
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = generateToken(user._id); // Assuming you have a method to generate a token
        return res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                fullname: user.fullname,
                mobile: user.mobile,
                isVerified: user.isVerified,
                CashbackAmount: user.CashbackAmount
            },
            token, // Send the token back to the client
        });
    } catch (error) {
        console.log("Error in signIn controller:", error);
        next(error);
    }
}

// check authentication controller
export const checkAuth = async (req, res, next) => {
    try {
        const user = req.user; // The user object is set in the ProtectRoute middleware
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        return res.status(200).json({
            message: "User is authenticated",
            user: {
                id: user._id,
                fullname: user.fullname,
                mobile: user.mobile,
                isVerified: user.isVerified,
                CashbackAmount: user.CashbackAmount
            },
        });
    } catch (error) {
        console.log("Error in checkAuth controller:", error);
        next(error);
    }
}

// checking admin
export const checkAdmin = async (req, res, next) => {
    try {
        const user = req.user;

        return res.status(200).json({
            message: "Admin is authenticated",
            user: {
                id: user._id,
                fullname: user.fullname,
                mobile: user.mobile,
                isVerified: user.isVerified,
                CashbackAmount: user.CashbackAmount
            },
        });
    }
    catch (error) {
        console.log("Error in Check-admin controller : " + error.message);
        next(error);
    }
}