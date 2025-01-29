const { MongoClient,ServerApiVersion} =require("./package.js")
const dbName = process.env.DB;
const collectionName= "cloud";
const URL= "mongodb://127.0.0.1:27017/Skybox?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0";
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