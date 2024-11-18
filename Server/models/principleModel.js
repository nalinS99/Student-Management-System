const mongoose = require("mongoose");
const principleSchema = new mongoose.Schema({
    userID :{
        type:String,
        required : true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})
 
const principle = new mongoose.model("Principle",principleSchema);
module.exports = principle;