const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;