export default class Lemur {
  constructor(species, eatsMeat, nocturnal) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.nocturnal = nocturnal
  }
  nightVision() {
    if (this.nocturnal == true) {
      console.log("I can see pretty well in the dark")
    }
    console.log("Let me sleep if it's dark...")
  }
}