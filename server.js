const express = require("express");
const dotenv = require("dotenv");
const cors =require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const RegisterRoutes = require("./routes/registerroutes");
const ProductRoutes = require("./routes/productroutes");
const CartRoutes = require('./routes/cartroutes')



dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/auth",RegisterRoutes);
app.use("/products",ProductRoutes);
app.use("/cart",CartRoutes)

mongoose  
        .connect(process.env.MONGO_URI)

        .then(()=>console.log("MongoDB connected successfully"))

        .catch((err) =>{
            console.error("MongoDB connection error:",err);
        })

        app.listen(PORT,()=>{
            console.log(`server running on port ${PORT}`)
        });

