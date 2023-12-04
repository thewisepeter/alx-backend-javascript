export default function hasValuesFromArray(set, list) {
  let result = true;
  list.map((item) => {
    if (!set.has(item)) {
      result = false;
    }
  });

  return result;
}
