const express =require("express");
const router= express.Router();
const {CreateBlog}= require("../Controller/BlogController");



router.post("/blogs", CreateBlog)// API for Creation of blogs 


module.exports= router;