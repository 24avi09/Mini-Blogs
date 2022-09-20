const express =require("express");
const router= express.Router();
const {createBlog, getBlogs, updateBlogs,deleteBlog,deletedocs, loginUser}= require("../Controller/blogController");
const {createAuthor}= require("../Controller/authorController");
const {authenticate}= require("../Middleware/auth");
const {authorValidation , blogsValidation }= require("../validator/validator");


////=================================  createAuthor  ========================================================///////

router.post("/authors", authorValidation , createAuthor)



////=================================  createBLog  ========================================================///////

router.post("/blogs", blogsValidation , authenticate, createBlog)



////=================================  getBLog  ========================================================///////

router.get("/blogs",authenticate, getBlogs)



////=================================  updateBLog  ========================================================///////

router.put("/blogs/:blogId",authenticate, updateBlogs)



////=================================  deleteBLog by params  ========================================================///////

router.delete("/blogs/:blogId",authenticate, deleteBlog)



////=================================  deleteBLog by query  ========================================================///////

router.delete("/blogs",authenticate, deletedocs)



////=================================  loginUser  ========================================================///////

router.post("/login", loginUser )


module.exports= router;