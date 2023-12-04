export default function getListStudentIds(arrayStudents) {
  if (Array.isArray(arrayStudents)) {
    return arrayStudents.map((student) => student.id);
  }
  return [];
}
