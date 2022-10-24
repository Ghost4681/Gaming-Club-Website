import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UeventSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    prize:{
        type:String,
        required:true,
    },
    venue:{
        type:String,        
    }, 
    poster:{
        type:String,
        default:"https://imgs.search.brave.com/A_PbIOfM-hxkSoGkZ0XISKfHbXv0EKrNkNL8fkVkll4/rs:fit:1150:647:1/g:ce/aHR0cHM6Ly93d3cu/c2Fsb25sZmMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzAxL2ltYWdlLW5v/dC1mb3VuZC0xLXNj/YWxlZC0xMTUweDY0/Ny5wbmc"                
    },
            
})

export default mongoose.model("Uevent", UeventSchema);