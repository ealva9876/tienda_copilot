const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'your-database-name';

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the MongoDB server
client.connect(function(err) {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected successfully to MongoDB');

    // Get the database object
    const db = client.db(dbName);

    // Perform database operations here

    // Close the connection
    client.close();
});