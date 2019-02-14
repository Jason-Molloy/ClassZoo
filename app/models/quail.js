export default class Quail {
  constructor(species, eatsMeat, employed) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.employed = employed
  }
  getJob() {
    if (this.employed == false) {
      console.log("I can't find anything")
    }
    console.log("I'm always looking for something better...")
  }
}