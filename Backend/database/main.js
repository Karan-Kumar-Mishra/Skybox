const functions = require('./functions.js')
const mainobj={
 connect:  functions.connectdb,
 getid:  functions.getID,
 getnote:  functions.getnotes,
 getuser : functions.getuser,
 adduser: functions.adduser,
 deleteuser: functions.deleteuser,
 addnote: functions.addnote,
 updatanote: functions.updatanote,
 disconnect: functions.disconnectdb,
}
module.exports= mainobj
