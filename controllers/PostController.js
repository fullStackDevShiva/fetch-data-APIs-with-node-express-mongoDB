import Post from "../models/PostModel";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("userId").exec();
    console.log(posts);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("userId").exec();
    console.log(post);
    res.json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
