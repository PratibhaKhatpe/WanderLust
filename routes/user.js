const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const User=require("../models/user.js");
const {saveRedirectUrl}=require("../middleware.js");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const userController=require("../controllers/users.js");
const mongoose=require("mongoose");

router
    .route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));

router
    .route("/login")
    .get((req,res)=>{
        res.render("users/login");
    })
    .post(
        saveRedirectUrl,
        passport.authenticate("local",{failureRedirect: '/login', failureFlash:true}),
        userController.login
    );

router.get("/logout",userController.logout);

module.exports=router;
