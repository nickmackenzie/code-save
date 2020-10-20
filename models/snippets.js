const mongoose = require('mongoose')
const Schema = mongoose.Schema

const snippetSchema = new Schema({
    language: String,
    name: String,
    tags: [],
    snippet: String,
    favorite: Boolean
})
module.exports = mongoose.model("snippets", snippetSchema)