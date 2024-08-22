import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
dotenv.config()
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());

//app.get("/",(req,res)=>{
 //   res.send("hello world");
//})


app.listen(PORT,()=>console.log("server is running on port 5000"));