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

router.put("/api/burgers/:id", function(req,res){
    let condition = `id = ${req.params.id}`;
    let isDevoured = `devoured = ${req.body.devoured}`;
    burger.update(isDevoured, condition, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})

router.post("")

module.exports = router;