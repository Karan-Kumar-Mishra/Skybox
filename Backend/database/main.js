const functions = require('./functions.js')
const mainobj={
 connect:  functions.connectdb,
 getid:  functions.getID,
 getnotes:  functions.getnotes,
 getnote: functions.getnote,
 getuser : functions.getuser,
 adduser: functions.adduser,
 deleteuser: functions.deleteuser,
 addnote: functions.addnote,
 updatanote: functions.updatanote,
 disconnect: functions.disconnectdb,
 editnote: functions.editnote,
 deleteallnotes: functions.deleteallnotes,
}
module.exports= mainobj;
