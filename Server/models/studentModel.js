const mongoose = require("mongoose");
const studentSchema =new mongoose.Schema({
    stdID:{
        type:String,
        required:true,
        unique:true
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
        require:true,
    }
});

const student = new mongoose.model("Student" ,studentSchema);
module.exports = student;