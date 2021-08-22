const { connect } = require("./client");
 // code that does something when the connection is first established
const conn = connect();
const setupInput = function() {
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
  }
  process.stdin.on('data', handleUserInput);
  
  return stdin;
}
setupInput();
module.exports = setupInput;