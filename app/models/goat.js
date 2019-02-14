export default class Goat {
  constructor(species, eatsMeat, horns) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.horns = horns
  }
  charge() {
    if (this.horns == true) {
      console.log("Get offa my bridge or I'll charge!")
    }
    console.log("got anything to eat?")
  }
}
