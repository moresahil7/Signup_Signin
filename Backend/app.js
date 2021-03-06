require('dotenv').config()


const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


//DB connection

mongoose.connect(process.env.DATABASE, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() =>{
    console.log("DB CONNECTED")
});



// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true

// }).then(() => {
//     console.log("DB CONNECTED")
// });
//This is Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
//Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);



const port =   process.env.PORT|| 8000;
//Starting server
 app.listen(port, () => {
     console.log(`app is running at ${port}`);
 });