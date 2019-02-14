export default class Alligator {
  constructor(species, eatsMeat, birthplace) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.birthplace = birthplace
  }
  eat(food) {
    if (food == "human") {
      console.log("I love to eat people!")
    } else if (food == "meat") {
      console.log("Good, MEAT! If it's not meat, I won't eat!")
    }
    console.log("who am I kidding? ...I'll eat anything")
  }
}

