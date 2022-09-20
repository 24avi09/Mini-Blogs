const express =require("express");
const router= express.Router();
const {createBlog, getBlogs, updateBlogs,deleteBlog,deletedocs, loginUser}= require("../Controller/blogController");
const {createAuthor}= require("../Controller/authorController");
const {authenticate}= require("../Middleware/auth");
const {authorValidation , blogsValidation }= require("../validator/validator");


////=================================  createAuthor  ========================================================///////

router.post("/authors", authorValidation , createAuthor)// API for Creation of Author



////=================================  createBLog  ========================================================///////

router.post("/blogs", blogsValidation , authenticate, createBlog)// API for Creation of blogs



////=================================  getBLog  ========================================================///////

router.get("/blogs",authenticate, getBlogs)// API for getting of blogs 



////=================================  updateBLog  ========================================================///////

router.put("/blogs/:blogId",authenticate, updateBlogs)// API for updating of blogs 



////=================================  deleteBLog by params  ========================================================///////

router.delete("/blogs/:blogId",authenticate, deleteBlog)// API for deleting blog by path Params



////=================================  deleteBLog by query  ========================================================///////

router.delete("/blogs",authenticate, deletedocs)// API for deleting blog by query Params



////=================================  loginUser  ========================================================///////

router.post("/login", loginUser )// API for login author


module.exports= router;