const authentication =require('./authentication')
const home =require('./home')
const addnote = require('./addnote')
const singup = require('./singup')
const login = require('./login')
const deleteuser =require('./deleteuser')

const mainobj={
    authentication,
    home,
    addnote,
    singup,
    login,
    deleteuser
}
module.exports= mainobj;