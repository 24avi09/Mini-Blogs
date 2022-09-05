const authourModel = require("../Models/authourModel");
const blogModel = require("../Models/blogModel");
//const blogmodel= require("../Models/blogModel");
//const {emailRegex}= require("../validators/validator")


const CreateBlog = async function (req, res) {
    try{
     let data = req.body;

     
     let authorId= await authourModel.findById(data.authorId)
   if (!authorId){
    return res.staus(400).send({data: " author is not present."})}

    // if(!emailRegex(email)) return res.status(400).send({status: false, message: "Email id is invalid!"})
     
     let savedData = await blogModel.create(data);
     res.status(201).send({ msg: savedData });}
    
     catch (error) {
       res.status(500).send(error.message)
     }
   };


   module.exports.CreateBlog=CreateBlog;