const express = require("express");
const router = express.Router();
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// create get, post, put, and delete routes

router.get('/', function(req, res) {
    console.log("hello");
    burger.all(function(data){
        const hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});
    
router.post("/api/burgers", function(req, res) {
console.log("got to create router");
    burger.create(req.body,function(res) {
        res.json(resa);
    })
})

// router.put("/api/burgers/:id", function(req, res){
//     const condition = "id = " + req.params.id;
// })

// router.update({
//     burger_name: req.body.burger_name,
//     id: req.body.
// })


  
//   router.delete("/api/cats/:id", function(req, res) {
//     const condition = "id = " + req.params.id;
  
//     cat.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
  
//   // Export routes for server.js to use.
  module.exports = router;