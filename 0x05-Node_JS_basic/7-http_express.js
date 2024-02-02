const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(path) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        let studentInfo = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        studentInfo += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            studentInfo += `Number of students in ${key}: ${value}. `;
            studentInfo += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(studentInfo);
      }
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(process.argv[2].toString()).then((studentInfo) => {
    response.send(['This is the list of our students', studentInfo].join('\n'));
  })
    .catch(() => {
      response.status(404).send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {
});

module.exports = app;
