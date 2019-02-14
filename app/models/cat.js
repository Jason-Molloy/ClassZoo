export default class Cat {
  constructor(name, species, eatsMeat, tame) {
    this.name = name
    this.species = species
    this.eatsMeat = eatsMeat
    this.tame = tame
  }
  stringGame() {
    if (this.tame == true) {
      console.log("play with me some more...")
    }
    console.log("let's play: LUNCH. You're it.")
  }
}

