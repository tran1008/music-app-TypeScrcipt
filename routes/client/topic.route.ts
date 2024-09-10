import { Router } from "express";
const router:Router=Router();
import *as controller from "../../controller/topic.controller"
router.get("/",controller.Topics)
export const topicRoutes:Router=router;
