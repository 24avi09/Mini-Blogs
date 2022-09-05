const mongoose = require('mongoose');
const authourModel = require('./authourModel');
const ObjectId = mongoose.Schema.Types.ObjectId;


const BlogSchema = new mongoose.Schema( {
    "title": {
        type: String,
        require: true
    },
    "body":{
        type: String,
        require: true,
       
    },
    "authorId":{
        type: ObjectId,
        ref: "Mini-author",
        required:true

    },
    "tags": {
        type: String,
        require: true,
        enum: ["Book", "Friends", "Self help"]
     },
    "category": {
        type: String,
        require: true
    } ,
    "subcategory": {
        type: String
    },       
    "deletedAt": "", // if deleted is true deletedAt will have a date 2021-09-17T04:25:07.803Z,
    // ["Non fiction", "Self Help"],
    "isdeleted": {
        type: Boolean,
        default: false
    },
    "publishedAt": "", // if published is true publishedAt will have a date 2021-09-17T04:25:07.803Z

    "isPublished": {
        type: Boolean,
        default: false
    },
   
    

}, { timestamps: true });


module.exports = mongoose.model('Blog', BlogSchema)



// { title: ,
//  body: {mandatory}, 
//  authorId: {mandatory, 
//     refs to author model}, 
//     tags: {array of string},
//      category: {string, mandatory,
//          examples: [technology, entertainment, life style, food, fashion]}, 
//          subcategory: {array of string, examples[technology-[web development, mobile development, AI, ML etc]] }, createdAt, updatedAt,
//           deletedAt: {when the document is deleted}, 
//           isDeleted: {boolean, default: false},
//            publishedAt: {when the blog is published},
//            isPublished: {boolean, default: false}}
