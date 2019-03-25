// Import MySQL connection.
const connection = require("../config/connections.js");

const orm = {
  
  selectBurgers: function(callback){
    const queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result){
      if(err) {throw err;}
      callback(result)
    })
  },
 
  // insertOne()
  createBurger: function(burger, callback){
    console.log("orm create burger works");
    connection.query("INSERT into burgers (burger_name) VALUES (?)",[burger.burger_name], function(err, result){
      if(err) {
        return callback(err);
      }
      callback(result)
    })
  },

  // updateOne()
  updateBurgers: function(burgerName, burgerId){
    const queryString = "UPDATE burgers SET ? WHERE ?"[{
      burger_name: burgerName,
      id: burgerId
    }];
    connection.query(queryString,[burgerName, burgerId], function(err, result){
      if(err) {
        throw err;
      }
      console.log(result)
    })
  }
};

module.exports = orm;