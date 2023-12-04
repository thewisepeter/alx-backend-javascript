export default getListStudentIds (arrayStudents) {
    if (Array.isArray(arrayStudents)) {
        return arrayStudents.map((student) => student.id)
    } else {
        return [];
    }

}
