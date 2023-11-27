export default function iterateThroughObject(reportWithIterator) {
  let employee;
  while ((employee = reportWithIterator.next()).done === false) {
    console.log(employee.value);
  }
}
