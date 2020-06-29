export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return this.eaten = false;
    } else {
      return this.eaten = true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }
}