import express from 'express';
import mongoose from 'mongoose';
import CompletedEvents from './models/CompletedEvents.js';
import UpcomingEvents from './models/UpcomingEvents.js';
import Images from './models/Images.js';
import Registered from './models/Registered.js';
const app = express();
app.use(express.json())

mongoose.connect(
    "mongodb+srv://sarthak312:8urhW64z80ujMvSz@cluster0.2zdz3pp.mongodb.net/?retryWrites=true&w=majority"
)
.then(() => app.listen(5000))
.then(() => console.log("succ"))
.catch((err) => console.log(err))

app.get("/getcevents", async (req, res) => {
    let cevents;
    try{
        cevents = await CompletedEvents.find();
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({cevents})
})

app.post("/cevent", async(req, res) => { 
    const {name, date, prize, first, second, third, poster} = req.body;
    const cevent = new CompletedEvents({
        name,
        date,
        prize,
        first,
        second,
        third,
        poster,        
    })
    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await cevent.save({session});                
        await session.commitTransaction();    
    }catch(err){
        console.log(err)
        return res.status(500).json({message: err})
    }
    return res.status(200).json({cevent})
})

app.delete("/delcevent/:id" , async(req,res) => {    
    const ceventID = req.params.id;
    let cevent;

    try{
        cevent = await CompletedEvents.findByIdAndRemove(ceventID);        
    }catch(err){
        return console.log(err)
    }
    if(!cevent){
        return res.status(404).json({message:"Event Not Found"})
    }
    return res.status(200).json({message:"Successfully deleted"})
})

app.post("/addimg/:id", async(req, res) => {
    const ceventid=req.params.id;
    let cevent;
    const {image} = req.body;
    try{
        cevent = await CompletedEvents.findById(ceventid);
    }catch(err){
        console.log(err)
    }
    if(!cevent){
        return res.status(404).json({message:"Event Not Found"})
    }
    const img = new Images({
        image,
        cevent,
    })
    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await img.save({session});
        cevent.gallery.push(img);
        await cevent.save({session});
        await session.commitTransaction();        
    }catch(err){
        console.log(err)
        return res.status(500).json({message: err})
    }
    return res.status(200).json({message:"Successful"})
})

app.get("/getimages", async(req, res) => {
    let images;
    try{
        images = await Images.find();
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({images})
})

app.delete("/delimg/:id", async(req, res)=>{
    const imgID = req.params.id;
    let img;

    try{
        img = await Images.findByIdAndRemove(imgID).populate('cevent');
        await img.cevent.gallery.pull(img);
        await img.cevent.save();
    }catch(err){
        return console.log(err)
    }
    if(!img){
        return res.status(404).json({message:"Image Not Found"})
    }
    return res.status(200).json({message:"Successfully deleted"})

})

app.get("/getuevents", async (req, res) => {
    let uevents;
    try{
        uevents = await UpcomingEvents.find();
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({uevents})
})

app.post("/uevent", async(req, res) => {
    const {name, date, prize, venue, poster} = req.body;
    const uevent = new UpcomingEvents({
        name,
        date,
        prize,
        venue,
        poster,        
    })
    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await uevent.save({session});                
        await session.commitTransaction();    
    }catch(err){
        console.log(err)
        return res.status(500).json({message: err})
    }
    return res.status(200).json({uevent})
})

app.delete("/deluevent/:id" , async(req,res) => {    
    const eventid = req.params.id;
    let uevent;

    try{
        await Registered.remove({eventid})
    }catch(err){
        console.log(first)
    }

    try{
        uevent = await UpcomingEvents.findByIdAndRemove(eventid);        
    }catch(err){
        return console.log(err)
    }
    if(!uevent){
        return res.status(404).json({message:"Event Not Found"})
    }
    return res.status(200).json({message:"Successfully deleted"})
})

app.post("/register/:id", async (req, res) => {
    const eventid = req.params.id;
    const {name, email, phone, field1, field2, field3, field4} = req.body;

    let uevent;

    try{
        uevent = await UpcomingEvents.findById(eventid);
    }catch(err){
        console.log(err)
    }
    if(!uevent){
        return res.status(400).json({message:"Event Not Fund"})
    }

    let exisitinguser;

    try{
        exisitinguser = await Registered.findOne({email, eventid}) 
    }catch(err){
        console.log(err)
    }
    if(exisitinguser){
        return res.status(400).json({exisitinguser})
    }
    const user = new Registered({
        name,
        email,
        phone,
        field1,
        field2,
        field3,
        field4,
        eventid,
    });
    try{
        await user.save();
    }catch(err){
        return console.log(err)
    }
    return res.status(201).json({user, message:"Successfully Registered"})        
})

app.get("/allregistered", async(req, res) => {
    let registered;
    try{
        registered = await Registered.find();
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({registered})
})

app.get("/registered/:id", async(req, res) =>{
    const eventid = req.params.id;
    let registered;

    try{
        registered = await Registered.find({eventid});
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({registered})
})

app.delete("/delregi/:id", async(req, res) => {
    const id = req.params.id;
    let user;

    try{
        user = await Registered.findByIdAndRemove(id);        
    }catch(err){
        return console.log(err)
    }
    if(!user){
        return res.status(404).json({message:"User Not Found"})
    }
    return res.status(200).json({message:"Successfully deleted"})
})
//8urhW64z80ujMvSz
    // "name":"KickOff",
    // "date":"20th October",
    // "prize":"Upto 1.5K",
    // "first":"Praneeth",
    // "second":"Daksh",
    // "third":"Sahil"