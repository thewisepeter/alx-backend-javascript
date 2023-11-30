export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getters
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  // Setters
  set brand(brand) {
    if (typeof brand !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._brand = brand;
  }

  set motor(motor) {
    if (typeof motor !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._motor = motor;
  }

  set color(color) {
    if (typeof color !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
