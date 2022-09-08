

const isValidName = function(name,res) {
    
    // if(!fname){return res.status(400).send({status:false , msg :"First Name required"})}
    const nameRegex = /^[a-zA-Z]{2,30}$/
    
    return nameRegex.test(name)
    
}
// function validateEmail(email) 
//     {
//         var re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     }

module.exports={isValidName};

// if(!isValid(title)) {
//     res.status(400).send({status: false, message: 'Title is required'})
//     return
// }

// if(!isValid(body)) {
//     res.status(400).send({status: false, message: 'Body is required'})
//     return
// }
// if(!isValid(authorId)) {
//     res.status(400).send({status: false, message: 'AuthorId is required'})
//     return
// }
// if(!isValid(authorId)) {
//     res.status(400).send({status: false, message: 'AuthorId is required'})
//     return
// }

// if(!isValid(tags)) {
//     res.status(400).send({status: false, message: 'Tags is required'})
//     return
// }

// if(!isValid(category)) {
//     res.status(400).send({status: false, message: 'Category is required'})
//     return
// }
// if(!isValid(subcategory)) {
//     res.status(400).send({status: false, message: 'Subcategory is required'})
//     return
// }
// //====================================================================================================================
 
// const authorvalidation= function(req,res){
// if(!isValid(fname)) {
//      res.status(400).send({status: false, message: 'First Name is required'})
//     return
// }
// if(!isValid(lname)) {
//     res.status(400).send({status: false, message: 'Last Name is required'})
//     return
// }
// if(!isValid(title)) {
//     res.status(400).send({status: false, message: 'Title is required'})
//     return
// }

// if(!isValid(email)) {
//     res.status(400).send({status: false, message: 'Email id is required'})
//     return
// }
// if(!isValid(password)) {
//     res.status(400).send({status: false, message: 'Password is required'})
//     return
// }
// if(!isValid(lname)) {
//     res.status(400).send({status: false, message: 'Last Name is required'})
//     return
// }
// }