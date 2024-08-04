const { MongoClient} =require("./package.js")
require('dotenv').config();
const dbName = "test";
const collectionName= "cloud";
const URL=`mongodb://127.0.0.1:27017/test`;
const client = new MongoClient(URL);
const db = client.db(dbName);
const collection = db.collection(collectionName);
module.exports={
    URL,
    client,
    db,
    collection
}