export default class Iguana {
  constructor(species, eatsMeat, length) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.length = length
  }
  loneEnclosure() {
    if (this.length > 165) {
      console.log("Keep me by myself")
    }
    console.log("I can play with others")
  }
}
