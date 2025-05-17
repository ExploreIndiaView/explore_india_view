import mongoose from 'mongoose';
const BookingSchema = new mongoose.Schema({
    PackageName: {
        type: String,
        required: true,
    },
    PackageDays: {
        type: Number,
        required: true,
    },
    PackagePrice: {
        type: Number,
        required: true,
    },
    people: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    hotel: {
        type: String,
        enum: ["3 Star", "5 Star", ""]
    },
    PlaceList: [{
        type: String
    }],
    AdventureList: [{
        type: String
    }],
    paymentStatus: {
        order_id: {
            type: String,
        },
        payment_id: {
            type: String,
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

const Booking = mongoose.model('Booking', BookingSchema);
export default Booking;