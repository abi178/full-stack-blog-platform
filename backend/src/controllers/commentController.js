const Comment = require("../models/Comment");

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      content: req.body.content,
      author: req.user.id,
      post: req.params.postId,
      parentComment:
        req.body.parentComment || null,
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getComments = async (req, res) => {
  try {
    const comments =
      await Comment.find({
        post: req.params.postId,
      })
        .populate(
          "author",
          "username email"
        )
        .sort({
          createdAt: -1,
        });

    res.json(comments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createComment,
  getComments,
};