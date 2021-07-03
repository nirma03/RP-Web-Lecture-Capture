const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Video Recording Model
const userSchema = new Schema(
    {
        moduleCode:{ type: String, required: true, trim: true},
        moduleName: { type: String, required: true, unique: true, trim: true },
        videoPath: { type: String, required: false, trim: true },
    },
    {
        timestamps: true,
    }
);

const VideoRecording = mongoose.model("VideoRecording", userSchema);

//Export User
module.exports = VideoRecording;