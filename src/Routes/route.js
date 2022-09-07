const express =require("express");
const router= express.Router();
const {createBlog, getBlogs, updateBlogs,deleteBlog,deletedocs, loginUser}= require("../Controller/blogController");
const {createAuthor}= require("../Controller/authorController");



router.post("/authors", createAuthor)// API for Creation of Author 

router.post("/blogs", createBlog)// API for Creation of blogs

router.get("/blogs", getBlogs)// API for getting of blogs 

router.put("/blogs/:blogId", updateBlogs)// API for updating of blogs 

router.delete("/blogs/:blogId", deleteBlog)

router.delete("/blogs", deletedocs)

router.post("/login", loginUser )

module.exports= router;