import express from "express";
import { addRating, getRating } from "../controllers/rateController.js";

const rateRouter = express.Router();

rateRouter.post("rate-restaurant", addRating);
rateRouter.get("/:userId/:resId", getRating);

export default rateRouter;
