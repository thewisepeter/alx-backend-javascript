const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase()
      .then((studentsData) => {
        const fields = Object.keys(studentsData).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        response.status(200).send(`This is the list of our students\n${
          fields.map((field) => {
            const studentsCount = studentsData[field].length;
            const firstNames = studentsData[field].join(', ');
            return `Number of students in ${field.toUpperCase()}: ${studentsCount}. List: ${firstNames}`;
          }).join('\n')}`);
      })
      .catch((error) => {
        response.status(500).send(`Cannot load the database: ${error.message}`);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase()
      .then((studentsData) => {
        const firstNames = studentsData[major] || [];
        response.status(200).send(`List: ${firstNames.join(', ')}`);
      })
      .catch((error) => {
        response.status(500).send(`Cannot load the database: ${error.message}`);
      });
  }
}

module.exports = StudentsController;
