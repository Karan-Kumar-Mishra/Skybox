const { MongoClient,ServerApiVersion} =require("./package.js")
const dotenv = require("dotenv");
require('dotenv').config();
dotenv.config();
const dbName = process.env.DB;
const collectionName= "cloud";
const URL= process.env.MONGO_URI;
const client = new MongoClient(URL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
const db = client.db(dbName);
const collection = db.collection(collectionName);
module.exports={
    URL,
    client,
    db,
    collection
}