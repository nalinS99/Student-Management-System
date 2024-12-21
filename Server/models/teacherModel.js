const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
    GradeID :{
        type:String,
        require:true,
        unique:true
        
    },
    Grade :{
        type:String,
        require:true,
        unique:true
        
    },
    tName :{
        type:String,
        require:true,
        
    },
    tPassword :{
        type:String,
        require:true,
        
    }
},{
    timestamps:true,
})

const teacher = new mongoose.model("Teacher",teacherSchema);
module.exports = teacher;