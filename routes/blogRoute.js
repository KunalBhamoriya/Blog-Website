const express = require('express');
const { getAllBlogsController, getBlogByIdController, userBlogController, createBlogController, updateBlogController, deleteBlogController } = require('../controllers/blogController');

const router = express.Router();

router.get("/all-blogs", getAllBlogsController);
router.get("/get-blog/:id", getBlogByIdController);
router.get("/user-blog/:id", userBlogController);
router.post("/create-blog", createBlogController);
router.put("/update-blog/:id", updateBlogController);
router.delete("/delete-blog/:id", deleteBlogController);

module.exports = router;