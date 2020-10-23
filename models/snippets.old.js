const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tagSchema = new Schema({
    tags: []
})

const snippetSchema = new Schema({
    snippet: String,
    language: String,
    name: String,
    categories: [tagSchema],
    favorite: Boolean,
    google: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }

})



module.exports = mongoose.model("snippets", snippetSchema)