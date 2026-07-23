const User=require("../models/user.js");
const mongoose=require("mongoose");

module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup");
};

module.exports.signup=async(req,res,next)=>{
    try{
        const {username,email,password}=req.body;
        const newUser = new User({
            username,
            email
        });
        const registeredUser = await User.register(
            newUser,
            password
        );
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash(
                "success",
                "Welcome to WanderLust"
            );
            res.redirect("/listings");
        });
    }catch(err){
        
    console.log("ERROR:", err);

        if(err.name === "UserExistsError"){
            req.flash(
                "error",
                "Username already exists. Please login."
            );
            return res.redirect("/login");
        }
        req.flash(
            "error",
            err.message
        );
        res.redirect("/signup");
    }
};

module.exports.login=async(req,res,next)=>{
    req.flash("success","Welcome to WanderLust, You are Logged in!");
    let redirectUrl=res.locals.redirectUrl || "/listings" ;
    res.redirect(redirectUrl);
};

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You are logged out!");
        res.redirect("/listings");
    });
};
