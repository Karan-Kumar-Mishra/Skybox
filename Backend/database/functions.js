const { mongoose, crypto } = require("./package.js");
const { usermodel, feedbackModel } = require("./model.js");
const { URL, client, collection } = require("./variable.js");
function generateRandomId(length) {
  try {
    return crypto.randomBytes(length).toString("hex").slice(0, length);
  } catch (error) {
    return error;
  }
}
async function connectdb() {
  try {
    await mongoose.connect(URL);
    await client.connect();
    return "Connected to MongoDB";
  } catch (error) {
    return "Failed to connect to MongoDB:" + error;
  }
}

async function adduser(user) {
  let res = await getuser("name", user.name);
  if (res != null) {
    return;
  }
  try {
    const newUser = new usermodel({
      id: generateRandomId(20),
      name: user.name,
      email: user.email,
      more_info: user.more_info,
    });
    return await newUser.save();
  } catch (error) {
    return error;
  }
}
async function getuser(key, value) {
  try {
    return await usermodel.findOne({ [key]: value });
  } catch (error) {
    return error;
  }
}
async function deleteuser(key) {
  try {
    return await usermodel.deleteOne({ email: key });
  } catch (error) {
    return error;
  }
}
async function updatenote(key, noteindex, note) {
  try {
    getnotes(key).then((res) => {
      let updatenotes = res[noteindex] + ` ${note}`;
      console.log("update note=>", updatenotes);
      return usermodel
        .updateOne({ id: key }, { $set: { [`notes.${noteindex}.note`]: note } })
        .then((result) => {
          return result;
        });
    });
  } catch (error) {
    return error;
  }
}

async function editnote(key, noteindex, note) {
  try {
    if (noteindex > (await usermodel.findOne({ id: key })).notes.length) {
      return 0;
    }
    return await usermodel
      .updateOne({ id: key }, { $set: { [`notes.${noteindex}`]: note } })
      .then((result) => {
        return result;
      });
  } catch (error) {
    return error;
  }
}
async function addnote(key, note) {
  try {
    return await usermodel.updateOne({ id: key }, { $push: { notes: note } });
  } catch (error) {
    return error;
  }
}
async function deleteSingelnote(key, index_title) {
  let arr = await getnotes(key);
  let newUpdatenotes = arr.filter((note) => note.title != index_title);
  console.log("update notes=> ", newUpdatenotes);
  return await usermodel.updateOne({ id: key }, { $set: { notes: newUpdatenotes } });
}
async function deleteallnotes(key) {
  return await usermodel.updateOne({ id: key }, { $set: { notes: [] } });
}
async function getnotes(key) {
  try {
    return (await usermodel.findOne({ id: key })).notes;
  } catch (error) {
    return error;
  }
}
async function getnote(key, index) {
  try {
    return (await usermodel.findOne({ id: key })).notes[index];
  } catch (error) {
    return error;
  }
}
async function getID(key, value) {
  try {
    return (await usermodel.findOne({ [key]: value })).id;
  } catch (error) {
    return error;
  }
}
async function disconnectdb() {
  try {
    await mongoose.disconnect();
    await client.close();
  } catch (error) {
    return error;
  }
}
async function saveFeedback(feedbackObj) {
  const res = (
    await feedbackModel.updateOne({}, { $push: { feedbacks: feedbackObj } })
  ).modifiedCount;
  if (res == 0) {
    const newfeedback = feedbackModel({
      feedbacks: [],
    });
    newfeedback.save();
    return (
      await feedbackModel.updateOne({}, { $push: { feedbacks: feedbackObj } })
    ).modifiedCount;
  }
  return res;
}
async function addNotification(msg) {
  return await usermodel.updateOne( {$push: {  Notifications: {id:generateRandomId(20) ,data:Date(),text:msg}} } );
}
async function deleteNotification(key) {
  
}
async function deleteAllNotification() {
 
}

module.exports = {
  connectdb,
  getID,
  getnotes,
  getnote,
  getuser,
  adduser,
  deleteuser,
  addnote,
  editnote,
  updatenote,
  disconnectdb,
  deleteSingelnote,
  deleteallnotes,
  saveFeedback,
  addNotification,
  deleteNotification,
  deleteAllNotification
};
