import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    image:{
        type:String,        
    },
    cevent:{
        type: mongoose.Types.ObjectId,
        ref:"Cevent",
        required: true,        
    },
})

export default mongoose.model("Image", ImageSchema);