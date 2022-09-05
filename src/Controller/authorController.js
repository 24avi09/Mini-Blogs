const authorModel = require("../Models/authorModel")
const {validateEmail} = require("../validators/validator")

const createAuthor = async function(req,res){
    try {
        let authorDetails = req.body
        let email = authorDetails["email"]

       

    if(!validateEmail(email) ) return res.status(400).send({status: false, message: "Email id is invalid!"})
    let savedData = await authorModel.create(authorDetails);
    res.status(201).send({ msg: savedData });  
            
        }
    catch (error) {
       res.status(500).send(error.message)
    }
    
}

module.exports = {createAuthor}
