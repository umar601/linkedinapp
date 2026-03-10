const express = require("express");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser")
const cors = require("cors")
// import express from "express"
// import mongoose from "mongoose";

function middleware(app){

    app.use(express.json())
    app.use(cookie())
    app.use(cors())

    // app.use((req,res,next)=>{

    //     console.log(req.user)

    //     next()
        
    // })


}

module.exports = middleware;

