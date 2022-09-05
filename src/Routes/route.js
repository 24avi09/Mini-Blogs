const express =require("express");
const router= express.Router();
const BlogController= require("../Controller/BlogController");



router.post("/blogs",BlogController.CreateBlog)// API for Creation of blogs 


module.exports= router;