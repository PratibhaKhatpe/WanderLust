const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const Review=require("../models/reviews.js");
const mongoose=require("mongoose");
const {isLoggedIn,validateReview, isReviewAuthor}= require("../middleware.js");
const reviewController=require("../controllers/reviews.js");

// Post Route for reviews
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.deleteReview));

module.exports=router;
