const mysql = require("mysql");

const { db_host, db_name, db_user, db_password } = require("./config");

const db = {
  host: db_host,
  user: db_user,
  password: db_password,
  database: db_name,
};
var connection;
function handleDisconnect() {
  connection = mysql.createConnection(db);
  connection.connect(function(err) {
    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();
module.exports = connection;
