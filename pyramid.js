const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the Number ', function(num){
  var string = "";
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num - i; j++) {
      string += " ";
    }
    for (var k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
  process.exit(0);
})