const authourModel = require("../Models/authorModel");
const blogModel = require("../Models/blogModel");
const mongoose = require("mongoose");
const moment = require("moment");

const CreateBlog = async function (req, res) {
  try {
    let data = req.body;
    let CurrentDate = moment().format("DD MM YYYY hh:mm:ss");

    if (!data["authorId"]) {
      return res
        .status(400)
        .send({ status: false, msg: " authorId is not present." });
    }
    if (!mongoose.isValidObjectId(data.authorId)) {
      return res
        .status(400)
        .send({ status: false, msg: "authorId is invalid" });
    }
    
    let authorDetails = await authourModel.findById(data["authorId"]);

    if (!authorDetails) {
      return res
        .status(400)
        .send({ status: false, msg: " author is not present." });
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
    let getBlogsDetails = await blogModel.find({
      $and: [filter, { isdeleted: false, isPublished: true }],
    });
    
    if (!getBlogsDetails[0]) {
      return res
        .status(404)
        .send({ status: false, msg: " Blog is not present." });
    }
    return res.status(200).send({ status: true, data: getBlogsDetails });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};

const updateBlogs = async function (req, res) {
  try {
    let idOfBlog = req.params;
    let data = req.body;

    let [title,body,tag, subcategories] = [data["title"], data["body"], data["tags"], data["subcategory"] ]

    let CurrentDate = moment().format("DD MM YYYY hh:mm:ss");
    
    if (!mongoose.isValidObjectId(idOfBlog.blogId)) {
      return res
        .status(400)
        .send({ status: false, error: "blogId is invalid" });
    }
    
    let updateBlog = await blogModel.findOneAndUpdate(
      { _id: idOfBlog.blogId , isPublished: false },
      {
        $push: { tags: tag, subcategory: subcategories },
        $set: {
          title: title,
          body: body,
          isPublished: true,
          publishedAt: CurrentDate,
        },
      },
      { new: true }
    );
    
    if (!updateBlog) {
      return res.status(404).send({ status: false, msg: "Blog does not exist." });
    }
    if (updateBlog["isdeleted"] !== false) {
      return res.status(404).send({ status: false, msg: "Blog not exist." });
    }

    res.status(200).send({ status: true, data: updateBlog });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};

const deleteBlog = async function (req, res) {
  try {
    let idOfBlog = req.params;

    if (!mongoose.isValidObjectId(idOfBlog.blogId)) {
      return res
        .status(400)
        .send({ status: false, msg: "blogId is invalid" });
    }

    let getBlogDetails = await blogModel.findOne({ _id: idOfBlog.blogId });

    if (!getBlogDetails || getBlogDetails["isdeleted"] == true) {
      return res
        .status(404)
        .send({ status: false, msg: " Blog does not exist." });
    }
    let deleteBlog = await blogModel.updateOne(
      { _id: idOfBlog.blogId },
      { $set: { isdeleted: true } }
    );
    res.status(200).send();

  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};

const deletedocs = async function (req, res) {
  try {
    let data = req.query;
    let blog = await blogModel.updateMany(
      data,
      { $set: { isdeleted: true } },
    );
    if (blog["matchedCount"] === 0) {
      return res.status(404).send({ status: false, msg: "Blog not exist" });
    }

    res.send();

  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};

module.exports = { CreateBlog, getBlogs, updateBlogs, deleteBlog, deletedocs };
