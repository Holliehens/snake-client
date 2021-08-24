let connection;

//const { connect } = require("./client");
 // code that does something when the connection is first established
//const conn = connect();
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = (key) => {
    process.stdout.write('.');
    if (key === '\u0003') {
      process.exit();
    }
    console.log(key);
    if (key === 'w') {
    conn.write('Move: up');
    }
    if (key === 'a') {
    conn.write('Move: left');
    }
    if (key === 's') {
    conn.write('Move: down');
    }
    if (key === 'd') {
    conn.write('Move: right');
    console.log("HUNGRY!!");
    }

  }
  process.stdin.on('data', handleUserInput);
  
  return stdin;
}

module.exports = { setupInput };