const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tagSchema = new Schema({
    tags: []
})

const snippetSchema = new Schema({
    snippet: String,
    language: {
        type: String,
        enum: ["bash", "c++", "c#", 'css', "ejs", "html", "ini", "java", "javascript", "json", "lua", "markdown", "php", "python", "scss", "sql", "swift", "text", "typescript", 'http', 'nodejs', 'ruby']
    },
    name: String,
    categories: [tagSchema],
    favorite: Boolean,
    google: {
        type: Schema.Types.String,
        ref: 'Users'
    }

})



module.exports = mongoose.model("snippets", snippetSchema)