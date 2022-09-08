const jwt = require("jsonwebtoken");
const blogModel = require("../Models/blogModel");

const authenticate = function (req, res, next) {
  try {
    let token = req.headers["x-api-key"];
    if (!token) {
      return res
        .status(404)
        .send({ status: false, msg: "token must be present" });
    }

    jwt.verify(token, "mini-blog-site_batch-15", (err, decoded) => {
      if (err) {
        return res
          .status(404)
          .send({ status: false, msg: "enter a valid token" });
      } else {
        req.decodedToken = decoded;
      }
    });
    next();
  } catch (err) {
    return res.status(500).send({ status: false, msg: "Server Error" });
  }
};

const authorization = async function (req, res, next) {
  try {
    let pathBlogId = req.params.blogId;
    let queryDetails = req.query;
    let queryAuthorId = req.query.authorId;
    let tokensId = req.decodedToken.userId;
    let detailsofquery={...queryDetails}
    let blogDetails = await blogModel.find({
      $or: [{ _id: pathBlogId }, detailsofquery]
    });
    if (!blogDetails)
      return res.status(404).send({ status: false, msg: "Blog not available" });


    for (let i = 0; i < blogDetails.length; i++) {
      
      if ( tokensId != blogDetails[i]["authorId"].toString() || tokensId != blogDetails[i]["authorId"].toString() ) {
        return res
          .status(404)
          .send({ status: false, msg: "Unknown user not authorized" });
      }
      next();
    }  
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports = { authenticate, authorization };
