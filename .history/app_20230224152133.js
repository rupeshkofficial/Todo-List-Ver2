const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/todo");

const trySchema = new mongoose.Schema({
    name: String
});

const item = mongoose.model("task", trySchema);
const todo = new item({
    name: "Create some videos"
});

const todo2 = new item({
    name: "Create some videos"
});

const todo3 = new item({
    name: "Create some videos"
});

const todo4 = new item({
    name: "Create some videos"
});
todo2.save();
todo3.save();
todo4.save();
