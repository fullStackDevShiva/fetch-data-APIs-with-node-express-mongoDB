import mongoose from "mongoose";

const postModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    reactions: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postModel);
