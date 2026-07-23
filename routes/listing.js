const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const mongoose=require("mongoose");
const {isLoggedIn,isOwner,validateListing}= require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({ storage });
const User=require("../models/user.js")

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.createListing)
    );

//New route 
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.get("/search",wrapAsync(listingController.searchListing));

// router.get(
//     "/favorites",
//     isLoggedIn,
//     wrapAsync(listingController.showFavorites)
// );

router.get(
    "/category/:category",
    wrapAsync(listingController.categoryFilter)
);

router
    .route("/:id")
    .get(
        wrapAsync(listingController.showListing)
    )
    .put(
        isLoggedIn,
        isOwner,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.updateListing)
    )
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.deleteListing)
    );

// Edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

module.exports=router;

