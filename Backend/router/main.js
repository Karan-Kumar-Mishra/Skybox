const authentication =require('./authentication')
const home =require('./home')
const addnote = require('./addnote')
const singup = require('./singup')
const login = require('./login')

const mainobj={
    authentication,
    home,
    addnote,
    singup,
    login
}
module.exports= mainobj;