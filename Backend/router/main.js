const authentication =require('./authentication')
const home =require('./home')
const addnote = require('./addnote')
const singup = require('./singup')
const login = require('./login')
const deleteuser =require('./deleteuser')
const updatanote =require('./updatenote')
const editnote =require('./editnote')
const deletenote =require('./deletenote')
const deleteallnote =require('./deleteallnote')
const mainobj={
    authentication,
    home,
    addnote,
    singup,
    login,
    deleteuser,
    updatanote,
    editnote,
    deletenote,
    deleteallnote
}
module.exports= mainobj;