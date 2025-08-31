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
 updatanote: functions.updatenote,
 disconnect: functions.disconnectdb,
 editnote: functions.editnote,
 deleteallnotes: functions.deleteallnotes,
 saveFeedback: functions.saveFeedback,
 deleteSingelnote:functions.deleteSingelnote,
 addNotification:functions.addNotification,
 deleteNotification:functions.deleteNotification,
 deleteAllNotification:functions.deleteAllNotification,
 getNotifications:functions.getNotifications,
 makePrime:functions.makePrime,
 isPrime:functions.isPrime,
 add_fs_url:functions.add_fs_url
}
module.exports= mainobj;
