const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("list,{}")
});

app.post("/", function(req,res){
    console.log(req.body.ele1);
});

app.listen(8000, function () {
    console.log("Server started");
});