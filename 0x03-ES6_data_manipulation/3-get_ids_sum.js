export default function getStudentIdsSum(arrayStudents) {
  if (Array.isArray(arrayStudents)) {
    const studentId = arrayStudents.map((student) => student.id);
    const initialValue = 0;
    return studentId.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  }
  return 0;
}
