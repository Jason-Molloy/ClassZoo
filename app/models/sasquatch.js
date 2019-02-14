export default class Sasquatch {
  constructor(species, eatsMeat, juggles) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.juggles = juggles
  }
  learnJuggle() {
    if (this.juggles == true) {
      console.log("Let me show you my stuff")
    }
    console.log("I want to learn to juggle")
  }
}