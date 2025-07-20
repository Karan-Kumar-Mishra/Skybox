const { mongoose } = require("./package");
usrschema= mongoose.Schema({
    id:String,
    name:String,
    email:String,
    isprime:Boolean,
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