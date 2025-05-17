import mongoose from 'mongoose';

const hotelBookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    destination: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    people: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const HotelBooking = mongoose.model('HotelBooking', hotelBookingSchema);
export default HotelBooking;