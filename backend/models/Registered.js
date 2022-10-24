import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RegisteredSchema = new Schema({
    eventid:{
        type: mongoose.Types.ObjectId,
        ref:"Uevent",
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },    
    field1:{
        type:String,
        default:"Null"
    },
    field2:{
        type:String,
        default:"Null"
    },
    field3:{
        type:String,
        default:"Null"
    },
    field4:{
        type:String,
        default:"Null"
    }    
})

export default mongoose.model("Registered", RegisteredSchema);