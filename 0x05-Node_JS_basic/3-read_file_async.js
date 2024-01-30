const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Attempt to read the database file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // If the database is not available, reject the Promise with an error
        reject(new Error('Cannot load the database'));
      } else {
        // If the database is available, process the data and resolve the Promise
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = {};
        const fields = {};

        lines.forEach((line) => {
          const [name, field] = line.split(',');
          if (!students[field]) students[field] = [];
          students[field].push(name);

          fields[field] = (fields[field] || 0) + 1;
        });

        const totalStudents = lines.length;
        console.log(`Number of students: ${totalStudents}`);

        for (const [field, count] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${count}. List: ${students[field].join(', ')}`);
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
