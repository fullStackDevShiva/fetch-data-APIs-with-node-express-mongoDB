import express from "express";

import { getPosts, getPostById } from "../controllers/PostController.js";

const router = express.Router();
router.get("/allposts", getPosts);
router.get("/posts/:id", getPostById);

export default router;
