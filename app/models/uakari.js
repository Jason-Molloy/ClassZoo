export default class Uakari {
  constructor(species, eatsMeat, playsGuitar) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.playsGuitar = playsGuitar
  }
  playSong(song) {
    if (this.playsGuitar == true) {
      console.log(`I can play ${song} for you`)
    }
    console.log("I don't know how")
  }
}