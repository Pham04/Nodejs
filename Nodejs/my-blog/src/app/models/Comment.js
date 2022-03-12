const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Comment = new Schema({
    name: { type: String, required: true },
    des: {type: String, require: true}
 
}, {timestamps: true});
module.exports = mongoose.model('Comment', Comment);