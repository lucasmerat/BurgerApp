const burger = require("../models/burger");
const express = require("express");

const router = express.Router();

router.get("/", function(req,res){
    burger.show(function(data){
        let handleObject = {
            burgers: data
        };
        res.render("index", handleObject);
    })
})

router.post("")

module.exports = router;