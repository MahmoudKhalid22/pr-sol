const Car = function (make, velocity) {
  this.make = make;
  this.speed = velocity;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};
Car.prototype.brake = function () {
  return (this.speed -= 5);
};

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);

console.log(BMW.accelerate());
console.log(BMW.accelerate());
console.log(BMW.brake());
