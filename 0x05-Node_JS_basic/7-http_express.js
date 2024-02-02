const express = require('express');

const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(process.argv[2].toString())
    .then((studentInfo) => {
      response.send(studentInfo);
    })
    .catch(() => {
      response.status(404).send('Cannot load the database');
    });
});

app.listen(port, () => {
});

module.exports = app;
