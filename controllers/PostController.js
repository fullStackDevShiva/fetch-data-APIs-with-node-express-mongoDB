import Post from "../models/PostModel.js";
import User from "../models/UserModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("userId").exec();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    console.log(req.params.id);
    const post = await Post.findById(req.params.id).populate("userId").exec();
    console.log(post);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
