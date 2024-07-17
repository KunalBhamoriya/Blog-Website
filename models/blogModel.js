const mongoose = require('mongoose');

//schema design
const blogSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:true,
    },
    blogTitle:{
        type:String,
        required: true,
    },
    blogContent:{
        type: String,
        required:true,
    },
    hashTags:{
        type: String
    }

},{timestamps:true});

const blogModel = mongoose.model('blogs', blogSchema);
module.exports = blogModel;