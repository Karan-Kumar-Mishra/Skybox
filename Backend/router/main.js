const authentication =require('./authentication')
const home =require('./home')
const addnote = require('./addnote')
const signup = require('./singup')
const login = require('./login')
const deleteuser =require('./deleteuser')
const updatanote =require('./updatenote')
const editnote =require('./editnote')
const deletenote =require('./deletenote')
const deleteallnote =require('./deleteallnote')
const getnotes= require('./getnotes')
const getnote= require('./getnote')
const getuser= require('./getuser')
const feedback = require('./feedback')
const addnotifiaction=require('./addnotification')

const mainobj={
    authentication,
    home,
    addnote,
    signup,
    login,
    deleteuser,
    updatanote,
    editnote,
    deletenote,
    deleteallnote,
    getnotes,
    getnote,
    getuser,
    feedback,
    addnotifiaction
}
module.exports= mainobj;