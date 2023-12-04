export default function getStudentsByLocation(arrayStudents, city) {
  if (Array.isArray(arrayStudents)) {
    return arrayStudents.filter((student) => student.location === city);
  }
  return [];
}
