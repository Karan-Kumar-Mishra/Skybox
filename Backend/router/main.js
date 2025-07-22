const authentication = require('./authentication')
const home = require('./home')
const addnote = require('./addnote')
const signup = require('./singup')
const login = require('./login')
const deleteuser = require('./deleteuser')
const updatanote = require('./updatenote')
const editnote = require('./editnote')
const deletenote = require('./deletenote')
const deleteallnote = require('./deleteallnote')
const getnotes = require('./getnotes')
const getnote = require('./getnote')
const getuser = require('./getuser')
const feedback = require('./feedback')
const addnotifiaction = require('./addnotification')
const getnotification = require('./getnotification')
const deletenotifiaction = require('./deletenotification')
const deleteAllnotifiaction = require('./deleteAllnotifiaction')
const checkprime = require('./checkprime')
const markprime = require('./markprime')
const create_order =require('./createorder')
const verify_payment =require('./verify_payment')

const mainobj = {
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
    create_order,
    verify_payment,
    checkprime,
    markprime,
    addnotifiaction,
    getnotification,
    deletenotifiaction,
    deleteAllnotifiaction
}
module.exports = mainobj;