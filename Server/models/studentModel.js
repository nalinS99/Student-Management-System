const mongoose = require("mongoose");
const studentSchema =new mongoose.Schema({
    stdID:{
        type: String,
        required: true,
        unique: true, // Ensures no two students have the same ID
        trim: true,
    },
    sName:{
        type:String,
        required:true,

    },
    sPassword:{
        type:String,
        required:true,
    },
    GradeID :{
        type:String,
        required:true,
    }
});

const student = new mongoose.model("Student" ,studentSchema);
module.exports = student;