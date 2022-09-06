const authourModel = require("../Models/authorModel");
const blogModel = require("../Models/blogModel");
const mongoose = require("mongoose");
const moment = require("moment");

const CreateBlog = async function (req, res) {
  try {
    let data = req.body;
    let CurrentDate = moment().format("DD MM YYYY hh:mm:ss");
    let authorId = await authourModel.findById(data["authorId"]);
    let _idAuthorId = authorId._id;

    if (!authorId) {
      return res.staus(400).send({ data: " author is not present." });
    }
    if (mongoose.isValidObjectId(_idAuthorId) === false) {
      return res.status(400).send({ Error: "authorId is invalid" });
    }

    if (data["isPublished"] == true) {
      data["publishedAt"] = CurrentDate;
    }
    if (data["isdeleted"] == true) {
      data["deletedAt"] = CurrentDate;
    }

    let savedData = await blogModel.create(data);
    res.status(201).send({ status: true, data: savedData });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};

const getBlogs = async function (req, res) {
  try {
    let filter = req.query;
    let authorId = await blogModel.find(filter);
    for (let i = 0; i < authorId.length; i++) {
      if (
        authorId[i]["isdeleted"] !== false &&
        authorId[i]["isPublished"] !== true
      ) {
        return res.status(400).send({
          status: false,
          error: "isdeleted or isPublished is not valid",
        });
      }
      return res.status(200).send({ status: true, data: authorId });
    }
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};

const updateBlogs = async function (req, res) {
  try {
    let blogId = req.params;
    let data = req.body;
    let title = data["title"],
      body = data["body"],
      tag = data["tags"],
      subcategories = data["subcategory"];

    if (!blogId) {
      return res.staus(400).send({ status: false, msg: " Blog is invalid." });
    }

    let CurrentDate = moment().format("DD MM YYYY hh:mm:ss");

    let authorId = await blogModel.findByIdAndUpdate(
      { _id: blogId.blogId },
      {
        $push: { tags: tag, subcategory: subcategories },
        $set: { title: title, body: body, isPublished: true },
      },
      { new: true }
    );
    if (authorId["isPublished"] == true) {
      authorId["publishedAt"] = CurrentDate;
    }

    if (authorId["isdeleted"] !== false) {
      return res.status(404).send({ status: false, msg: "Blog not exist." });
    }

    res.status(200).send({ status: true, data: authorId });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};

const deleteBlog = async function (req, res) {

  try {
    let blogId = req.params

     if (!blogId) {
       return res.status(400).send({ status: false, msg: " blogId is invalid." }); 
     }
    let authorId = await blogModel.findOne({_id : blogId.blogId})
    
    if (!authorId) {
      return res.status(404).send({ status: false, msg: " Blog does not exist." });
    }
    if(authorId["isdeleted"] == true){
      return res.status(404).send({ status: false, msg: " Blog already deleted." });
    }
    a= await blogModel.updateOne(
      {_id : blogId.blogId},
      {$set: {isdeleted: true}}
    )
   // let x=true
    // authorId["isdeleted"]= x
    res.status(200).send("acvv")

  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
    
  }
}

module.exports = { CreateBlog, getBlogs, updateBlogs ,deleteBlog};
