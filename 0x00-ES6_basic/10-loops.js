export default function appendToEachArrayValue(array, appendString) {
  const array1 = [];
  for (const item of array) {
    array1.push(appendString + item);
  }

  return array1;
}
