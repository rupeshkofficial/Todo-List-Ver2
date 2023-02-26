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
    name: "Learn DSA"
});

const todo3 = new item({
    name: "Learn React"
});

const todo4 = new item({
    name: "Take some rest"
});

// todo2.save();
// todo3.save();
// todo4.save();

app.get("/", function (req, res) {
    item.find({}, function (err, foundItems) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("list", { dayej: foundItems });
        }

    });

});

app.post("/", function (req, res) {
    const itemName = req.body.ele1;
    const todo4 = new item({
        name: itemName

    });
    todo4.save();
    res.redirect("/");
});

app.post("/delete", function(req,res){

});

app.listen("4000", function () {
    console.log("server is running");
});
