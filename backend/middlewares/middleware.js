const express = require("express");
const jwt = require("jsonwebtoken");
// import express from "express"
// import mongoose from "mongoose";

function middleware(app){

    app.use(express.json())


    app.use((req,res,next)=>{

       
    })


}

module.exports = middleware;

