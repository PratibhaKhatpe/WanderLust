const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const {default:passportLocalMongoose}= require('passport-local-mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
// console.log(typeof passportLocalMongoose);
const userSchema= new Schema({
    email:{
        type:String,
        required:true
    },
    // wishlist:[
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:"Listing"
    //     }
    // ]
});
// const User=mongoose.model('User',userSchema);
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);