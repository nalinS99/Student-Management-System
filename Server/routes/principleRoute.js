const express = require("express");
const authRouter =express.Router();
const PASSWORD = process.env.PASSWORD;
const SCHOOLID = process.env.SCHOOLID;
const Principle = require("../models/principleModel");

authRouter.post("/PLogin", (req,res )=>{
   try { const {userID ,password} = req.body;
    const isValid =  userID == SCHOOLID && password== PASSWORD;
    if(isValid){
        res.send("login Sucess");
    }
    else{
        res.send("invalid credential");
    }
console.log(PASSWORD);
console.log(SCHOOLID);
console.log(password);
console.log(userID);
console.log("Request Body:", req.body);
}
    catch (err) {
        console.error("error occur");
      }


})
;

module.exports = authRouter;