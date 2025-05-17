import FlightBooking from "../models/flightBookings.model.js";
import HotelBooking from "../models/hotelBookings.model.js";
import TrainBooking from "../models/trainsBooking.model.js";

// Book hotel
export const bookHotel = async (req, res, next) => {
    const { destination, startDate, endDate, people } = req.body;
    const user = req.user;

    try {
        if (!destination || !startDate || !endDate || !people || !user) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newBooking = new HotelBooking({
            user: user._id,
            destination,
            startDate,
            endDate,
            people,
        });
        await newBooking.save();
        return res.status(200).json({
            message: "Hotel Booked Successfully",
        })
    } catch (error) {
        console.log("Error in bookHotel controller:", error);
        next(error);
    }
};

// bookk train
export const bookTrain = async (req, res, next) => {
    const { source, destination, date, people } = req.body;
    const user = req.user;

    try {
        if (!source || !destination || !date || !people || !user) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newBooking = new TrainBooking({
            user: user._id,
            source,
            destination,
            date,
            people,
        });
        await newBooking.save();
        return res.status(200).json({
            message: "Train Booked Successfully",
        })
    } catch (error) {
        console.log("Error in bookTrain controller:", error);
        next(error);
    }
}

// Book flight
export const bookFlight = async (req, res, next) => {
    const { source, destination, date, people } = req.body;
    const user = req.user;

    try {
        if (!source || !destination || !date || !people || !user) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newBooking = new FlightBooking({
            user: user._id,
            source,
            destination,
            date,
            people,
        });
        await newBooking.save();
        return res.status(200).json({
            message: "Train Booked Successfully",
        })
    } catch (error) {
        console.log("Error in bookTrain controller:", error);
        next(error);
    }
}

// get all booking details for the user
export const getBookingDetails = async (req, res, next) => {
    const user = req.user;

    try {
        const flight = await FlightBooking.find({ user: user._id });
        const hotel = await HotelBooking.find({ user: user._id });
        const train = await TrainBooking.find({ user: user._id });

        return res.status(200).json({ message: "Bookings fetched successfully", flight, hotel, train });

    } catch (error) {
        console.log("error in getBookingDetails controller:", error);
        next(error);
    }

}

// get all flight booking details for the admin 
export const getFlightBookingsforAdmin = async (req, res, next) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 15;
        const skip = (page - 1) * limit;
        const flight = await FlightBooking.find().sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate(
                "user",
                "fullname mobile isVerified _id",
            );
        return res.status(200).json({ message: "Bookings fetched successfully", flight, });
    } catch (error) {
        console.log("Error in getBookingsForAdmin controller:", error);
        next(error);
    }
}

// get all hotel booking details for the admin
export const getHotelBookingsforAdmin = async (req, res, next) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 15;
        const skip = (page - 1) * limit;
        const hotel = await HotelBooking.find().sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate(
                "user",
                "fullname mobile isVerified _id",
            );
        return res.status(200).json({ message: "Bookings fetched successfully", hotel });
    } catch (error) {
        console.log("Error in getBookingsForAdmin controller:", error);
        next(error);
    }
}

// get all train bookings details for admin
export const getTrainBookingsforAdmin = async (req, res, next) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 15;
        const skip = (page - 1) * limit;
        const train = await TrainBooking.find().sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate(
                "user",
                "fullname mobile isVerified _id",
            );
        return res.status(200).json({ message: "Bookings fetched successfully", train });
    } catch (error) {
        console.log("Error in getBookingsForAdmin controller:", error);
        next(error);
    }
}