const {mongoose} = require("mongoose")
const {usrschema,Feedback} = require('./schema.js')
usermodel= mongoose.model("cloud",usrschema)
feedbackModel=mongoose.model("Feedbacks",Feedback)
module.exports={
    usermodel,
    feedbackModel,
}