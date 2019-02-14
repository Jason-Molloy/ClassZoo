export default class Frog {
  constructor(species, eatsMeat, needsWater) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.needsWater = needsWater
  }
  worry() {
    if (this.needsWater == true) {
      console.log("I gotta stay in water, get me back into water. Hurry!!")
    }
    console.log("Hippity, Hoppity :) ")
  }
}

