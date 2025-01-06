const express = require("express");
const dotenv = require("dotenv");
const cors =require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const RegisterRoutes = require("./routes/registerroutes");



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());

app.use("/auth",RegisterRoutes);

mongoose  
        .connect(process.env.MONGO_URI)

        .then(()=>console.log("MongoDB connected successfully"))

        .catch((err) =>{
            console.error("MongoDB connection error:",err);
        })

        app.listen(PORT,()=>{
            console.log(`server running on port ${PORT}`)
        });

