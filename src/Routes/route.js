const express =require("express");
const router= express.Router();
const {createBlog, getBlogs, updateBlogs,deleteBlog,deletedocs, loginUser}= require("../Controller/blogController");
const {createAuthor}= require("../Controller/authorController");
const {authenticate, authorization}= require("../Middleware/auth");



router.post("/authors", createAuthor)// API for Creation of Author 

router.post("/blogs", createBlog)// API for Creation of blogs

//

router.get("/blogs",authenticate, getBlogs)// API for getting of blogs 

router.put("/blogs/:blogId",authenticate, authorization, updateBlogs)// API for updating of blogs 

router.delete("/blogs/:blogId",authenticate, deleteBlog)

router.delete("/blogs",authenticate, deletedocs)

router.post("/login",authenticate, loginUser )

module.exports= router;