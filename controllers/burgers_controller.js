// DEPENDENCIES
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// ROUTES
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function (result) {
        res.json({
            id: result.insertId
        });
    });
});
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// EXPORTS
module.exports = router;