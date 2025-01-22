const { mongoose } = require("./package");
usrschema= mongoose.Schema({
    id:String,
    name:String,
    email:String,
    notes :[],
    Notifications:[],
    more_info :{}
});

Feedback=mongoose.Schema({
    Date:String,
    feedbacks: []
})

module.exports={
    usrschema,
    Feedback
}