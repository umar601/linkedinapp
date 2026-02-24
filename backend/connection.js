const mongoose = require("mongoose");

async function databaseConnection(url) {

    await mongoose.connect(url).then(()=>{
        console.log("database connection succesful");
    })
    
}

module.exports = databaseConnection;