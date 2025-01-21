const express = require("express");
const dotenv = require("dotenv");
const cors =require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const RegisterRoutes = require("./routes/registerroutes");
const ProductRoutes = require("./routes/productroutes");
const CartRoutes = require('./routes/cartroutes');
const CategoryRoutes = require('./routes/categoryroutes');
const CarouselRoutes = require('./routes/carouselroutes');
const OrderRoutes = require('./routes/orderroutes');




dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/auth",RegisterRoutes);
app.use("/products",ProductRoutes);
app.use("/cart",CartRoutes);
app.use('/category',CategoryRoutes);
app.use('/carousel',CarouselRoutes);
app.use('/order',OrderRoutes);



mongoose  
        .connect(process.env.MONGO_URI)

        .then(()=>console.log("MongoDB connected successfully"))

        .catch((err) =>{
            console.error("MongoDB connection error:",err);
        })

        app.listen(PORT,()=>{
            console.log(`server running on port ${PORT}`)
        });