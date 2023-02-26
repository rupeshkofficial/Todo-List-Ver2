const express = require("express");
const bodyParser = require("bodyparser");
var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const mongoose=require("mongoose");
mongoose.connect("")
