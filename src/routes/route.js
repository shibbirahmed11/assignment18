const express = require('express')
const router = express.Router();
const blogCon=require('../controller/blogController')

router.post("/create-blog", blogCon.createBlog)
router.get("/all-blogs",blogCon.blogList)
router.get("/get-blog/:id", blogCon.getBlog)
router.post("/update-blog/:id", blogCon.updateBlog)
router.delete("/delete-blog/:id",blogCon.delete)

module.exports = router;