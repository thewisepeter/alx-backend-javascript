export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let called = 0;

  // Check if there is a value associated with the endpoint
  if (weakMap.get(endpoint)) {
    called = weakMap.get(endpoint);
  }
  // update the weakMap with incremented count
  weakMap.set(endpoint, called + 1);

  if (called + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
