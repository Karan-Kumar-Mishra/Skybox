const { MongoClient,ServerApiVersion} =require("./package.js")
const dbName = process.env.DB;
const collectionName= "cloud";
const URL="mongodb+srv://mishrazack69:67G9vrJao14DHejH@cluster0.hbws8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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