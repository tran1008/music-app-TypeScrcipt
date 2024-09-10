import express, { Express,Request,Response } from "express";
import *as database from "./config/database";
import dotenv from "dotenv";

import clientRoutes from "./routes/client/index.route";
dotenv.config();
database.connect();
const app:Express=express();
const port:number|string= process.env.PORT || 3000;
clientRoutes(app);
app.use(express.static("./public"))
app.set("views", "./views"); 
app.set("views engine", "pug");

app.listen(port,()=>{
    console.log(`App listen on port ${port}`)
})