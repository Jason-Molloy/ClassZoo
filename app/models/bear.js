export default class Bear {
  constructor(species, eatsMeat, climbsTree) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.climbsTree = climbsTree
  }
  foodPref() {
    if (this.climbsTree == true) {
      console.log("Honey is the best!!")
    }
    console.log("Bears should live on meat, alone.")
  }
}
