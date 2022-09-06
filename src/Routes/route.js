const express =require("express");
const router= express.Router();
const {CreateBlog, getBlogs, updateBlogs,deleteBlog}= require("../Controller/BlogController");
const {createAuthor}= require("../Controller/authorController");



router.post("/authors", createAuthor)// API for Creation of Author 

router.post("/blogs", CreateBlog)// API for Creation of blogs

router.get("/blogs", getBlogs)// API for getting of blogs 

router.put("/blogs/:blogId", updateBlogs)// API for updating of blogs 

router.delete("/blogs/:blogId", deleteBlog)

module.exports= router;