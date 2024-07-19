const mongoose = require("mongoose");

const impressionSchema = new mongoose.Schema(
    {
        blogid:{
            type:String,
            required: true,
        },
        LikeCount:{
            type:Number,  
        }

},{timestamps:true});

const impressionModel = mongoose.model("impressions", impressionModel);

module.exports = impressionModel;