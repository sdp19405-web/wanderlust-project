const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.ATLASDB_URL;
// console.log("Connecting to:", dbUrl); // Avoid logging secrets

mongoose.connect(dbUrl)
    .then(() => {
        console.log("Connected successfully");
        mongoose.disconnect();
    })
    .catch(err => {
        console.error("Connection error:", err);
    });
