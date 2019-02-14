export default class Elephant {
  constructor(species, eatsMeat, circus) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.circus = circus
  }
  perform() {
    if (this.circus == true) {
      console.log("Watch me perform!!")
    }
    console.log("What are you looking at?")
  }
}
