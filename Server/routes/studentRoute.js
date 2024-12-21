const Student = require("../models/studentModel");
const express= require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");

authRouter.post("/addStudents", async (req , res)=>{
    const {stdID,sName,sPassword,GradeID} =req.body;
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedTPassword = await bcrypt.hash(sPassword,salt);

        const studet =new Student({
            stdID,sName,sPassword:hashedTPassword,GradeID

        });
        await studet.save();
        res.status(200).json({
            message: "Student added successfully" 
        })
    }
    
    catch(err){
        console.log(err);
        res.status(500).json({massage:"error"

        });

    }
});


authRouter.get("/getStd/:Gid", async (req,res)=>{
   
   try{
    const GradeID =req.params.Gid;
    const students = await Student.find({GradeID:GradeID});
    res.json(students); 
   }
   catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Failed to fetch students." });
  }
});

authRouter.patch("/addMarks", async (req,res)=>{
    const {GradeID,stdID,sinhalaMarks,mathematicsMarks,parisarayaMarks,englishMarks,religionMarks} =req.body;
   
    try{
        const student = await Student.findOne({ stdID: stdID, GradeID: GradeID });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
          }
        student.sinhalaMarks = sinhalaMarks;
        student.mathematicsMarks = mathematicsMarks;
        student.parisarayaMarks = parisarayaMarks;
        student.englishMarks = englishMarks;
        student.religionMarks = religionMarks;
        await student.save();
        res.status(200).json({
            message: "Marks added successfully"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({massage:"error"

        });

    }
}
)

module.exports =authRouter;