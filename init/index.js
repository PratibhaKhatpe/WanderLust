const mongoose=require("mongoose");
const Listing=require("../models/listing.js");
const initData=require("./data.js");

const mongoURL='mongodb://127.0.0.1:27017/wanderLust';

main().then(()=>{
    console.log("connected to DB.");
})
.catch((err)=>{
    console.log(err)
});

async function main(){
    await mongoose.connect(mongoURL);
}

const initDB=async ()=>{
    await Listing.deleteMany({});
    console.log(initData.data);
    initData.data=initData.data.map((obj)=>({...obj, owner: '6a4e6c86f5e944da9bb57046'}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized.");
}

initDB();
