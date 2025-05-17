import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Query = mongoose.model('Query', querySchema);
export default Query;