export default class Raven {
  constructor(species, eatsMeat, favBook) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.favBook = favBook
  }
  read(book) {
    if (this.favBook == book) {
      console.log(`${this.favBook} is the greatest thing ever written!`)
    }
    console.log(`Why don't I read ${this.favBook} instead`)
  }
}