const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    snippet: String,
    language: String,
    name: String,
    tags: [],
    favorite: Boolean
})
module.exports = mongoose.model("users", snippetSchema)