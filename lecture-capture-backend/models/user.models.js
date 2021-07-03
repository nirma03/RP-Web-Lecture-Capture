const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//User Model
const userSchema = new Schema(
    {
        email: { type: String, required: true, unique: true, trim: true },
        phoneNo: { type: String, required: false, trim: true },
        password: { type: String, required: true, trim: true },
        address: { type: String, required: false, trim: true },
        gender: { type: String, required: false, trim: true },
        type: { type: String, required: true, trim: true },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

//Export User
module.exports = User;