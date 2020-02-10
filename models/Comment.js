const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var CommentSchema = new Schema ({
    name: {
        type: String,
    }, 
    link: {
        type: String, 
        required: true
    },
})

var Comment = mongoose.model("Article", CommentSchema);
module.exports = Comment;