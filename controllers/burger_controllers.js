const express = require("express");
const router = express.Router();
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// create get, post, put, and delete routes

router.get('/', function(req, res) {
    console.log("get all burgers works");
    burger.all(function(data){
        const hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});
    
router.post("/api/burgers",function(req,res) {
    console.log("got to api/burgers");
    burger.create(req.body,function(result) {
        res.json(result);
    })
})

router.put("/api/burgers/:id", function(req, res){
    const condition = "id = " + req.params.id;
})

  module.exports = router;