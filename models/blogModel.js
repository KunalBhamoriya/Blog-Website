const mongoose = require('mongoose');

//schema design
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, "title is required"],
    },
    description:{
        type: String,
        required:[true, "description is required"],
    },
    image:{
        type:String,
        require:[true, "image is required"],
    },
    hashTags:{
        type: String
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required:[true, "user id is required"],
    }

},{timestamps:true});

const blogModel = mongoose.model('Blog', blogSchema);
module.exports = blogModel;