const express = require("express");
const authRouter =express.Router();
const PASSWORD = process.env.PASSWORD;
const SCHOOLID = process.env.SCHOOLID;

authRouter.post("/PLogin", (req,res )=>{
   try { const {userID ,password} = req.body;
    const isValid =  userID == SCHOOLID && password== PASSWORD;
    if(isValid){
        res.send("login Sucess");
    }
    else{
        res.send("invalid credential");
    }

}
    catch (err) {
        console.error("error occur");
      }


})
;

module.exports = authRouter;