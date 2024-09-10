import { Request,Response } from "express";
import Topic from "../models/topic.model"
export const Topics = async(req:Request,res:Response)=>{
    const topics =await Topic.find({
        deleted:false
    })
    console.log(topics)
    res.render("client/page/topic/index.pug",{
        pageTitle:"Chủ đề bài hát",
        topics
    })
}