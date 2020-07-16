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
  var queryString = "INSERT INTO burgers (??) VALUES (?)";
  connection.query(queryString, [cols, vals], function(err, result) {
    if (err) {
      throw err;
    }

    cb(result);
  });
},
updateOne: function(objColVals, condition, cb){
      var queryString = "UPDATE burgers SET ? WHERE ?"
      connection.query(queryString, [objColVals, condition], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
}
}
module.exports = orm;

