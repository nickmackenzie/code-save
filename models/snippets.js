const mongoose = require('mongoose')
const Schema = mongoose.Schema

const snippetSchema = new Schema({
    snippet: String,
    language: {
        type: String,
        enum: ["css", "ejs", "html", "ini", "java", "javascript", "json", "lua", "markdown", "php", "python", "scss", "sql", "swift", "svg", "text", "typescript", 'nodejs', 'ruby']
    },
    name: String,
    categories: [],
    favorite: Boolean,
    google: {
        type: Schema.Types.String,
        ref: 'Users'
    }

})



module.exports = mongoose.model("snippets", snippetSchema)