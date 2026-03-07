const express = require("express");
const app = express();
const port = 3000;


const url = "mongodb://127.0.0.1:27017/linkenapp"
const middleware = require("./middlewares/middleware.js")
const databaseConnection = require("./connection.js")

const userRouter = require("./routes/userroutes.js");
const postRouter = require("./routes/postroutes.js");
const commentRouter = require("./routes/commentroutes.js");
const connectionRouter = require("./routes/connectionRoutes.js");

// console.log(commentRouter)



// console.log(typeof(middleware))

databaseConnection(url);

middleware(app)

app.use("/",userRouter);
app.use("/",postRouter);
app.use("/",commentRouter);
app.use("/",connectionRouter);

// app.get("/test",(req,res)=>{
//     res.send("working")
// })

// app.use("/",(req,res)=>{

//     res.send("worling");

// })
app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
})



