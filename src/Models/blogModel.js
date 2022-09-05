const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    "title": {
        type: String,
        require: true
    },
    "body":{
        type: String,
        require: true,
        ref: " "
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
    },         // ["Non fiction", "Self Help"],
    "isdeleted": {
        type: Boolean,
        default: false
    },
    "deletedAt": "", // if deleted is true deletedAt will have a date 2021-09-17T04:25:07.803Z,
    "isPublished": {
        type: Boolean,
        default: false
    },
    "publishedAt": "", // if published is true publishedAt will have a date 2021-09-17T04:25:07.803Z
    

}, { timestamps: true });


module.exports = mongoose.model('Mini-Blog', blogSchema)



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
