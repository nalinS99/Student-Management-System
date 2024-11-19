const express = require("express");
const Teacher = require("../models/teacherModel");
const authRouter = express.Router();
const bcrypt = require("bcrypt");

authRouter.post("/addTeacher", async (req, res) => {
  const { GradeID, Grade, tName, tPassword } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedTPassword = await bcrypt.hash(tPassword, salt);
    const teacher = new Teacher({
      GradeID,
      Grade,
      tName,
      tPassword: hashedTPassword,
    });
    teacher.save();
    res.status(201).json({ message: "teacher added." });
  } catch (err) {
    res.status(500).json({ message: "error " });
  }
});



authRouter.get("/getGrade", async (req, res) => {
  try {
    const grade = await Teacher.find();
    res.status(200).json(grade);
  } catch (error) {
    console.error("Error fetching teachers:", error);
    res.status(500).json({ message: "Failed to fetch teachers." });
  }
});


authRouter.post("/TeLogin", async (req,res)=>{

  const {GradeID ,tPassword} = req.body;
  try{
    const teacher = await Teacher.findOne({GradeID});
    if(!teacher){
      return res.status(404).json({ message: "Teacher not found" });
    }
    const isMatch = await bcrypt.compare(tPassword,teacher.tPassword);

    if(!isMatch){
      return res.status(401).json({ message: "Invalid password" });
    }
    res.status(200).json({ GradeID : teacher.GradeID });
  }
  catch (error) {
    res.status(500).json({ message: "Failed to log teacher." });
  }
 

})

module.exports = authRouter;
