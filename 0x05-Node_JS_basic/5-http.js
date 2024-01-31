const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
        const students = {};
        const fields = {};
        lines.forEach((line) => {
          const fields = line.split(',');
          const name = fields[0];
          const field = fields[3];
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(name);
          fields[field] = (fields[field] || 0) + 1;
        });

        const output = [];
        output.push(`Number of students: ${lines.length}`);
        for (const [key, value] of Object.entries(fields)) {
          output.push(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
        }
        resolve(output.join('\n').trim()); // Remove trailing newline character
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {});

module.exports = app;
