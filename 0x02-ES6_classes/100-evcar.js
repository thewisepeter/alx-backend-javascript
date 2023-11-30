import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  // Getters
  get range() {
    return this._range;
  }

  // Setters
  set range(value) {
    this._range = value;
  }

  // method
  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}
