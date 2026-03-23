const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_USER = process.env.MONGO_USER || "admin";
const MONGO_PASS = process.env.MONGO_PASS || "qwerty";
const MONGO_HOST = process.env.MONGO_HOST || "localhost";
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB = process.env.MONGO_DB || "apnacollege-db";

const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/?authSource=admin`;
const client = new MongoClient(MONGO_URL);

let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db(MONGO_DB);
        console.log(`Connected successfully to database: ${MONGO_DB}`);
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

connectDB();

//GET all users
app.get("/getUsers", async (req, res) => {
    try {
        if (!db) await connectDB();
        const data = await db.collection('users').find({}).toArray();
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching users");
    }
});

//POST new user
app.post("/addUser", async (req, res) => {
    try {
        if (!db) await connectDB();
        const userObj = req.body;
        const result = await db.collection('users').insertOne(userObj);
        console.log("Data inserted:", result.insertedId);
        res.status(201).send("User added successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding user");
    }
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});