export default class Jellyfish {
  constructor(species, eatsMeat, deadly) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.deadly = deadly
  }
  danger() {
    if (this.deadly == true) {
      console.log("Stay Away!! your life depends on it!")
    }
    console.log("Watch out - I sting!")
  }
}