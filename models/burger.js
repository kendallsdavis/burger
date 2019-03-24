const orm = require("../config/orm.js");

const burger = {
    all: function(callback){
        console.log("burgers.js works")
        orm.selectBurgers(function(res){
        callback(res);
        });
    },

    create : function (burger,callback) {
        console.log("got to create function");
        orm.createBurger(burger,function(results) {
            callback(results);
        })
    },
    
    update: function(){
        orm.updateBurgers("burger_name", "id", function(res){
        // console.log(res)
            });
        },
}

module.exports = burger;


