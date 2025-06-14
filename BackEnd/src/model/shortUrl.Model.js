import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
    full_url: {
        type: String,
        require: true,
        clicks: {
            type: Number,
            default: 0,
        },
    },
    short_url: {
        type: String,
        require: true,
        unique: true,
        index: true,
        clicks: {
            type: Number,
            default: 0,
        },
    },
    clicks: {
        type: Number,
        require: true,
        default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
});

const shortUrl = mongoose.model("shortUrl", shortUrlSchema);

export default shortUrl;
