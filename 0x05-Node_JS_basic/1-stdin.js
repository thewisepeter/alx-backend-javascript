process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);
  if (process.stdin.isTTY) {
    process.stdout.write('\nThis important software is now closing\n');
  }
  process.exit();
});
