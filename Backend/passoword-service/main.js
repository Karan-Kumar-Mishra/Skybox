const variable= require('./variable.js')
const functions= require('./functions.js')
let mainobj={
    encryped:functions.hashPassword,
    passwordcheck:functions.verifyPassword
}
module.exports={
    mainobj
}