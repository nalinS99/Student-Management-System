const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    stdID: {
      type: String,
      required: true,
      unique: true, 
      trim: true,
    },
    sName: {
      type: String, 
      required: true,
    },
    sPassword: {
      type: String,
      required: true,
    },
    GradeID: {
      type: String,
      required: true,
    },
    sinhalaMarks: {
      type: String,
    },
    mathematicsMarks: {
      type: String,
    },
    parisarayaMarks: {
      type: String,
    },
    englishMarks: {
      type: String,
    },
    religionMarks: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const student = mongoose.model("Student", studentSchema);
module.exports = student;
