export default class Hawk {
  constructor(species, eatsMeat, winters) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.winters = winters
  }
  adultPlumage() {
    if (this.winters > 2) {
      console.log("This is my adult plumage")
    }
    console.log("I'm still a juvinille and tougher to identify")
  }
}
