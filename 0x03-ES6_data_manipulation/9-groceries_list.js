export default function groceriesList() {
  const newMap = new Map();
  const groceries = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  const list = Array.from(Object.keys(groceries));

  //   map through the array and for each item, set the value to the key in the finalMap
  list.map((item) => newMap.set(item, groceries[item]));
  return newMap;
}
