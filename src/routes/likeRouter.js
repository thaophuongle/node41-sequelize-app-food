import express from "express";
import {
  getLike,
  likeRestaurant,
  unlikeRestaurant,
} from "../controllers/likeController.js";

const likeRouter = express.Router();

likeRouter.post("like-restaurant", likeRestaurant);
likeRouter.delete("unlike-restaurant", unlikeRestaurant);
likeRouter.get("/:userId/:resId", getLike);

export default likeRouter;
