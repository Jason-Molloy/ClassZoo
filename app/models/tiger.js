export default class Tiger {
  constructor(species, eatsMeat, hasChildren) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.hasChildren = hasChildren
  }
  procreate() {
    if (this.hasChildren < 5) {
      console.log("we'd like to have at least one more.")
    }
    console.log("I think we're through having children")
  }
}