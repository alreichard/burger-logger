var connection = require("../config/connection.js");

var orm = {
selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
insertOne: function(cols, vals, cb){
  var queryString = "INSERT INTO burgers WHERE ?? = ?";
  connection.query(queryString, [cols, vals], function(err, result) {
    if (err) {
      throw err;
    }

    cb(result);
  });
},
updateOne: function(objColVals, condition, cb){
      var queryString = "UPDATE tables SET objectColVal WHERE condition"
      connection.query(queryString, [objColVals, condition], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
}
}
module.exports = orm;

