const express =require("express");
const router= express.Router();
const {CreateBlog}= require("../Controller/BlogController");
const {createAuthor}= require("../Controller/authorController");



router.post("/authors", createAuthor)// API for Creation of blogs 
router.post("/blogs", CreateBlog)// API for Creation of blogs 


module.exports= router;