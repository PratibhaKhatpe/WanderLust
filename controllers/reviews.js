const Listing=require("../models/listing");
const Review=require("../models/reviews");
const mongoose=require("mongoose");

module.exports.createReview=async(req,res)=>{
    // console.log(req.body);
    let {id}=req.params;
    let revListing=await Listing.findById(id);

    let review=req.body.review;

    let newReview=new Review(review);
    newReview.author=req.user._id;
    revListing.reviews.push(newReview);

    await newReview.save();
    await revListing.save();
    req.flash("success","New review created!");

    res.redirect(`/listings/${id}`);
};

module.exports.deleteReview=async(req,res)=>{
    let {id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review deleted!");
    res.redirect(`/listings/${id}`);
};
