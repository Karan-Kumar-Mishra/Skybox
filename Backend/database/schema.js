
const { mongoose } = require("./package");
usrschema= mongoose.Schema({
    id:String,
    name:String,
    email:String,
    isprime:Boolean,
    fs_info:{
        fs_id:String,
        fs_name:String,
        fs_url:String
    },
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