const { mongoose, crypto} = require("./package.js");
const { usermodel } = require("./model.js");
const { URL, client, collection } = require("./variable.js");
const pwd= require('../passoword-service/main')

function generateRandomId(length) {
  try {
    return crypto.randomBytes(length).toString("hex").slice(0, length);
  } catch (error) {
    return error
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
  const encryped_password= await pwd.mainobj.encryped(user.password) 
  try {
    const newUser = new usermodel({
      id: generateRandomId(20),
      name: user.name,
      email: user.email,
      password:  encryped_password
    });
    return await newUser.save();
  } catch (error) {
    return error;
  }

}
async function getuser(key) {
  try {
    return await usermodel.findOne({ id: key });
  } catch (error) {
    return error;
  }
}
async function deleteuser(key) {
  try {
    return await usermodel.deleteOne({ id: key });
  } catch (error) {
    return error;
  }
}
async function updatanote(key, noteindex, note) {
  try {
    getnotes(key).then((res) => {
      console.log(res[noteindex]);
      let updatenotes = res[noteindex] + ` ${note}`;
      collection.updateOne(
        { id: key },
        { $set: { [`notes.${noteindex}`]: updatenotes } }
      );
    });
  } catch (error) {
    return error;
  }
}
async function addnote(key, note) {
  try {
    return await collection.updateOne({ id: key }, { $push: { notes: note } });
  } catch (error) {
    return error;
  }
}
async function getnotes(key) {
  try {
    return (await usermodel.findOne({ id: key })).notes;
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
    await  mongoose.disconnect()
    await  client.close();
  } catch (error) {
    return error
  }
}
module.exports = {
  connectdb,
  getID,
  getnotes,
  getuser,
  adduser,
  deleteuser,
  addnote,
  updatanote,
  disconnectdb,
};
