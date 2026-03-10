const {sendConnetionRequest,acceptRequest,deleteRequest} = require("../controllers/connetionController");
const express = require("express");
const connectionRouter = express.Router();


connectionRouter
.get("/connection/send/:senderId/:reciverId",sendConnetionRequest)
.get("/connection/accept/:senderId/:reciverId",acceptRequest)
.delete("/connection/delete/:senderId/:reciverId",deleteRequest)

module.exports = connectionRouter;