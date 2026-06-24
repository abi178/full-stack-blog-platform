const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/postController");

router.post("/", protect, createPost);
router.get("/", getPosts);

router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

router.put("/:id/like", likePost);

module.exports = router;