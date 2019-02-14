export default class Kangaroo {
  constructor(species, eatsMeat, bornWild) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.bornWild = bornWild
  }
  greet() {
    if (this.bornWild == true) {
      console.log("G'day, Mate")
    }
    console.log("Good day, Sir")
  }
}