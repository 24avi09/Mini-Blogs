const jwt = require("jsonwebtoken");
const blogModel = require("../Models/blogModel");

const authenticate = function (req, res, next) {
  try {
    let token = req.headers["x-api-key"];
    console.log(req.headers);
    if (!token){
      return res
        .status(404)
        .send({ status: false, msg: "token must be present" });
    }

    jwt.verify(token, "mini-blog-site_batch-15", (err, decoded) => {
      if (err) {
        return res.status(404).send({ status: false, msg: "enter a valid token" });
      } else {
        req.decodedToken = decoded;
      }
    });
    next();
  } catch (err) {
    return res.status(500).send({ msg: "Server Error" });
  }
};

const authorization = async function (req, res, next) {
  try {

    let id = req.params.blogId;
    let tokens_Id = req.decodedToken.userId;

    let idOfUser = await blogModel.findById(id);
    if (!idOfUser)
      return res
        .status(404)
        .send({ status: false, msg: "Blog not available" });
    if (tokens_Id != idOfUser["authorId"].toString()){
        return res
        .status(404)
        .send({ status: false, msg: "Unknown user not authorized" });
    }
    next();
  } catch (err) {
    return res.status(500).send({ msg: "Server Error" });
  }
};

module.exports = { authenticate,  authorization };
