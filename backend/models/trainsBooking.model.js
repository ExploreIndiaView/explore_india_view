import mongoose from "mongoose";
const trainSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    source :{
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    people: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const TrainBooking = mongoose.model('TrainBooking', trainSchema);
export default TrainBooking;
