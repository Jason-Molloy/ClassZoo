export default class Dog {
  constructor(name, breed, eatsMeat, trained) {
    this.name = name
    this.breed = breed
    this.eatsMeat = eatsMeat
    this.trained = trained
  }
  getSlippers() {
    if (this.trained == true) {
      console.log("Your slippers, Master")
    }
    console.log("Zzzzzz")
  }
}
