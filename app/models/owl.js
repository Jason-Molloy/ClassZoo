export default class Owl {
  constructor(species, eatsMeat, favFood) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.favFood = favFood
  }
  chowDown(food) {
    if (this.favFood == food) {
      console.log(`Did you know how much I love ${food}`)
    }
    console.log(`I don't really give a hoot about ${food}`)
  }
}