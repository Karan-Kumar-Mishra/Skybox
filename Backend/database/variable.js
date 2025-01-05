const { MongoClient,ServerApiVersion} =require("./package.js")
const dbName = process.env.DB;
const collectionName= "cloud";
const URL= "mongodb+srv://karan:1234@cluster0.fyj7aks.mongodb.net/Skybox?retryWrites=true&w=majority";
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