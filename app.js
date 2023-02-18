const express =require("express")
const errorMiddleware=require("./middleware/error")
const app=express()
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

app.use(express.json())
app.use(cookieParser())
//Route
const product=require("./routes/productRoute")
const user=require("./routes/userRoute")
const order=require("./routes/orderRoute")

app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)
//Middleware for Errors
app.use(errorMiddleware)
module.exports=app

