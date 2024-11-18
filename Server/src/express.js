require("dotenv").config();
const cors = require('cors');
const dbCon = require("../config/dbCon");
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const principleRoute = require("../routes/principleRoute");

app.use(express.json());
app.use(cors());


app.use("/",principleRoute);


dbCon().then( ()=>{
    app.listen(PORT , ()=>{
        console.log("server is running");
    })
});