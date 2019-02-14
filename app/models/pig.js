export default class Pig {
  constructor(species, eatsMeat, favMovie) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.favMovie = favMovie
  }
  watch(movie) {
    if (this.favMovie == movie) {
      console.log(`${this.favMovie} is the BEST!`)
    }
    console.log(`Why don't we watch ${this.favMovie}`)
  }
}