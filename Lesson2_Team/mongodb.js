const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dernakos:Sp3gno24Lini@cluster0.cpiccp7.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
try {
    client.connect()
} catch (error) {

};