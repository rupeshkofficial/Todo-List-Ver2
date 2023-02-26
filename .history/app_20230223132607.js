const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
var items = [];

var example = "working";
app.get("/", function (req, res) {
    res.render("list", { ejes: example });
});

app.post("/", function (req, res) {
    var item  = req.body.ele1;
    items.push(item);
    res.redirect("/");

    // console.log(req.body.ele1);
});

app.listen(8000, function () {
    console.log("Server started");
});