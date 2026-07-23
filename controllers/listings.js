const Listing=require("../models/listing.js");
const User=require("../models/user.js");
const mongoose=require("mongoose");
const axios = require("axios");
const ExpressError=require("../utils/ExpressError.js");

module.exports.index=async(req,res)=>{
    let allListings=await Listing.find({});
    // console.log(allListings)
    res.render("listings/index",{allListings});
};

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new");
};

module.exports.createListing=async(req,res,next)=>{

    let response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params:{
                q: req.body.listing.location,
                format:"json"
            },

            headers:{
                "User-Agent":"WanderLust"
            }
        }
    );

    let result = response.data[0];
    console.log(result);

       let url=req.file.path;
       let filename=req.file.filename;
    //    console.log("This is url",url,"...","path",filename);
       let newListing=new Listing(req.body.listing);
    
       if(result){

        newListing.geometry = {
            type:"Point",

            coordinates:[
                Number(result.lon),
                Number(result.lat)
            ]
        };
    }
       newListing.owner=req.user._id;
       newListing.image={url,filename};

       await newListing.save();
       req.flash("success","New listing created!");
       res.redirect("/listings");
};

module.exports.showListing=async (req,res)=>{

    let {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        throw new ExpressError(400,"Invalid Listing ID");
    }

    const listing = await Listing.findById(id)
        .populate({path:"reviews", populate:{path:"author"}})
        .populate("owner");
    // console.log(listing);

    if(!listing){
        // throw new ExpressError(404,"Listing does not exists!");
        req.flash("error","Listing you requested for does not exists!");
        return res.redirect("/listings");
    }

    // console.log(listing);
    res.render("listings/show",{listing});
};

module.exports.renderEditForm=async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing does not exists");
        return res.redirect("/listings");
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit",{listing,originalImageUrl});
};

module.exports.updateListing=async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(req.file){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        await listing.save();
    }
    req.flash("success","Listing updated successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing=async(req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    req.flash("success","Listing deleted!");
    res.redirect("/listings");
};

module.exports.searchListing = async(req,res)=>{

    let {location}=req.query;


    if(!location){

        req.flash(
            "error",
            "Please enter a destination"
        );

        return res.redirect("/listings");

    };

    if(location.length < 3){

        req.flash(
            "error",
            "Please enter at least 3 characters"
        );

        return res.redirect("/listings");
    }

    let allListings = await Listing.find({

        location:{
            $regex:location,
            $options:"i"
        }

    });


    res.render(
        "listings/index.ejs",
        {
            allListings
        }
    );

};

// module.exports.showFavorites = async(req,res)=>{

//     let user = await User.findById(req.user._id)
//         .populate("wishlist");


//     res.render("listings/favorites",{
//         allListings:user.wishlist
//     });

// };

module.exports.categoryFilter = async(req,res)=>{

    let {category}=req.params;


    let allListings = await Listing.find({
        category:category
    });


    res.render(
        "listings/index.ejs",
        {
            allListings
        }
    );

};
