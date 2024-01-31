const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
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
        resolve(output.join('\n'));
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    if (!process.argv[2]) {
      res.statusCode = 404;
      res.end('Database path not provided');
    } else {
      countStudents(process.argv[2]).then((output) => {
        res.end(`This is the list of our students\n${output}`);
      }).catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
    }
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
