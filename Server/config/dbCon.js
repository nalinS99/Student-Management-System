const DBCON = process.env.DBCON;
const mongoose = require("mongoose");

const dbCon =  async ()=>{
    await mongoose.connect(DBCON);
    console.log("DB Conected");
}
module.exports =dbCon;