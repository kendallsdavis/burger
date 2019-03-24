const orm = require("../config/orm.js");

const burger = {
    all: function(callback){
        console.log("burgers.js works")
        orm.selectBurgers(function(res){
        callback(res);
        });
    },

    create: function(){
            orm.createBurger("Terribly Bland Veggie Burger", function(res){
            // console.log(res)
            });
        },
    
    update: function(){
        orm.updateBurgers("burger_name", "id", function(res){
        // console.log(res)
            });
        },
}

module.exports = burger;


