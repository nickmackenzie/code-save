const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String
})
module.exports = mongoose.model("Users", userSchema)