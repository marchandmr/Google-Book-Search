const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: { type: String, require: true },
    image: { type: String, uninque: true },
    title: { type: String, required: true },
    author: [{ type: String, required: true }],
    description: { type: String, required: true },
    link: { type: String, required: true }
});

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;
