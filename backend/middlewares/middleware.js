const express = require("express");
// import express from "express"
// import mongoose from "mongoose";

function middleware(app){

    app.use(express.json())


}

module.exports = middleware;

