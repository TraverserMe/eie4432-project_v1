import { MongoClient, ServerApiVersion } from 'mongodb';
// import config from './config.js';
const connect_uri = "mongodb+srv://admin:admin1234@cluster0.kvzeh3y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(connect_uri, {
  connectTimeoutMS: 2000,
  serverSelectionTimeoutMS: 2000,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function connect() {
  try {
    await client.connect();
    // Test the connection using client.db().command()
    await client.db("GoMdb").command({ ping: 1 });
    console.log('Successfully connected to the database!');
  } catch (error) {
    console.error(error+"Unable to establish connection to the database!");
    process.exit(1);
  }
}
connect().catch(console.dir);
export default client;
