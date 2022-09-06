const express =require("express");
const router= express.Router();
const {CreateBlog, getBlogs}= require("../Controller/BlogController");
const {createAuthor}= require("../Controller/authorController");



router.post("/authors", createAuthor)// API for Creation of Author 
router.post("/blogs", CreateBlog)// API for Creation of blogs 
router.get("/blogs", getBlogs)// API for Creation of blogs 


module.exports= router;