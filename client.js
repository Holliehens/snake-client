const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => { 
    console.log("Successfully connected to game server" );
    conn.write("Name: HAH" );
    // code that does something when the connection is first established
  });
  conn.on("data", (data) => {
  console.log(data.toString());
  });




  return conn;
};

console.log("Connecting ...");


module.exports = { connect }
  
 
