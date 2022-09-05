const express =require("express");
const router= express.router();

router.post("/blogs",BlogController.CreateBlog)