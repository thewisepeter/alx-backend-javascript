const fs = require('fs');

function countStudents(path) {
  // Check if path is provided
  if (!path) {
    throw new Error('Cannot load the database');
  }

  // Attempt to read the database file synchronously
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');

    // Filter out empty lines and skip the first line (assuming it contains field names)
    const validLines = lines.slice(1).filter((line) => line.trim() !== '');

    // Calculate the number of students
    const numberOfStudents = validLines.length;
    console.log(`Number of students: ${numberOfStudents}`);

    // Count the number of students in each field
    const fields = lines[0].split(',');
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      const studentsInField = validLines.filter((line) => {
        const values = line.split(',');
        return values[i].trim() !== '';
      }).length;
      console.log(`Number of students in ${field}: ${studentsInField}. List: ${validLines.map((line) => line.split(',')[i]).join(', ')}`);
    }
  } catch (err) {
    console.error('Cannot load the database:', err.message);
  }
}
module.exports = countStudents;
