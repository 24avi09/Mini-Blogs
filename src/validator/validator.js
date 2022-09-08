const mongoose = require("mongoose")

const isValidName = function(name) {
    const nameRegex = /^[a-zA-Z]{2,30}$/
    return nameRegex.test(name)
}

const isValidBody = function(body) {
    const nameRegex = /^[a-zA-Z0-9_ ]*$/
    return nameRegex.test(body)
}

const isValidTitle = function(title){
    return["Mr", "Mrs", "Miss"].indexOf(title) !== -1
}

const isValidPassword = function(Password){
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passRegex.test(Password) 
}

const isValidTag = function(title){
    return["Book", "Friends", "Self help"].indexOf(title) !== -1
}

const isValidAuthorId = function(title){
    return mongoose.isValidObjectId(title)
}
module.exports={isValidName, isValidTitle, isValidPassword , isValidBody, isValidTag , isValidAuthorId };