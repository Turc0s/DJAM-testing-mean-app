
var mongoose = require("mongoose");

var BookSchema = mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    description: String,
    published_year: String,
    publisher: String,
    updated_date: { type: Date, default: Date.now }
});

const Book = module.exports = mongoose.model("Book", BookSchema);
// module.exports = mongoose.model("Book", BookSchema);
