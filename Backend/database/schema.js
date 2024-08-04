const { mongoose } = require("./package");
usrschema= mongoose.Schema({
    id:String,
    name:String,
    email:String,
    password:String,
    notes :[]
});
module.exports={
    usrschema
}