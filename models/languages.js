const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = new Schema({
    tags: [String]
})
const userSchema = new Schema({
    googleId: String,

})
const snippetSchema = new Schema({
    snippet: String,
    language: String,
    name: String,
    categories: [tagSchema],
    favorite: Boolean,
    user: [userSchema]
})




// Google Id

//Tags/Categories








module.exports = mongoose.model("users", snippetSchema)