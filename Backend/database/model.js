const {mongoose} = require("mongoose")
const {usrschema} = require('./schema.js')
usermodel= mongoose.model("cloud",usrschema)
module.exports={
    usermodel
}