export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getters
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Setters
  set size(size) {
    if (typeof size !== 'Number') {
      throw new TypeError('Size must be a number');
    }
    this._size = size;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }

  // Casting to Number
  valueOf() {
    return this._size;
  }

  // Casting to String
  toString() {
    return this._location;
  }
}
