const mongoose=require('mongoose')
const { MongoClient } = require('mongodb');
const crypto = require('crypto');
const dotenv =require('dotenv')
module.exports={
    mongoose,
    MongoClient,
    crypto,
    dotenv
}