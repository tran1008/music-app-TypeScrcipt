import express, { Express,Request,Response } from "express";
import *as database from "./config/database";
import dotenv from "dotenv";
dotenv.config();
database.connect();
const app:Express=express();
const port:number=3000;
app.set("views", "./views");
app.set("views engine", "pug");
app.get("/topics",(req:Request,res:Response)=>{
    res.render("client/page/topic/index.pug")
})

app.listen(port,()=>{
    console.log(`App listen on port ${port}`)
})