const greeting = 'Welcome to Holberton School, what is your name?';
console.log(greeting);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (name) => {
  if (name && name.trim() !== '') {
    if (process.stdin.isTTY) {
      console.log(`Your name is: ${name}`);
    }
    if (!process.stdin.isTTY) {
      console.log('Welcome to Holberton School, what is your name?');
      console.log(`Your name is: ${name}`);
      console.log('This important software is now closing');
    }
    rl.close();
  }
});

// Listen for the close event
rl.on('close', () => {
  if (process.stdin.isTTY) {
    process.exit();
  }
});
