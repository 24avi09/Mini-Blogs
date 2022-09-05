const authourModel = require("../Models/authorModel");
const blogModel = require("../Models/blogModel");
const mongoose = require("mongoose");
const moment = require("moment")

const CreateBlog = async function (req, res) {
  try {
    let data = req.body;
    let CurrentDate = moment().format("DD MM YYYY hh:mm:ss");

    if (data["isPublished"] == true) {
      data["publishedAt"] = CurrentDate
    }
    if (data["isdeleted"] == true) {
      data["deletedAt"] = CurrentDate
    }

    let authorId = await authourModel.findById(data["authorId"]);
    let _idAuthorId = authorId._id

    if (!authorId) {
      return res.staus(400).send({ data: " author is not present." });
    }
    if (mongoose.isValidObjectId(_idAuthorId) === false) {
      return res.send({ Error: "authorId is invalid" });}

      let savedData = await blogModel.create(data);
      res.status(201).send({ msg: savedData });
    
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.CreateBlog = CreateBlog;

//  else if (mongoose.isValidObjectId(user) === false) {
// res.send({ Error: "userId is not present " });
// }
