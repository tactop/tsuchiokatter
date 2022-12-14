const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        max: 200,
        required:true
    },
    img: {
        type: String,
    },
    type: {
        type: String,
        required:true
    },
    repTo: {
        type: String
    },

}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);