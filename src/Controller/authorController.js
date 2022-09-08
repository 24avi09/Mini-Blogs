const authorModel = require("../Models/authorModel")
const validator = require("validator")
const { isValidName } = require("../validator/validator")

const createAuthor = async function (req, res) {
    try {
        let authorDetails = req.body
        let email = authorDetails["email"]
        if(!authorDetails.fname){return res.status(400).send({status:false,msg:"Fname is mendatory"})}
        let name = isValidName(authorDetails.fname) 
        console.log(name)
        if(!name){return res.status(400).send({status:false,message:"name not valid"})}
        //  let validauthor = validation.authorvalidation(authorDetails)
        console.log(isValidName.apply)
        // isValidName.apply

        if (!validator.isEmail(email)) return res.status(400).send({ status: false, message: "Email id is invalid!" })


        let savedData = await authorModel.create(authorDetails);
        res.status(201).send({ status: true, data: savedData });

    }
    catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }

}

module.exports = { createAuthor }
