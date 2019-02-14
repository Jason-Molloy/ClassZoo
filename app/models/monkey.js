export default class Monkey {
  constructor(species, eatsMeat, steals) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.steals = steals
  }
  pickpocket(item) {
    if (this.steals == item) {
      console.log(`I got your ${item}!Ha,ha!`)
    }
    console.log(`I don't know what a ${item} is`)
  }
}