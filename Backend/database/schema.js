const { mongoose } = require("./package");
usrschema= mongoose.Schema({
    id:String,
    name:String,
    email:String,
    notes :[],
    more_info :{}
});
module.exports={
    usrschema
}