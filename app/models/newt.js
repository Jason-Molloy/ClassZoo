export default class Newt {
  constructor(species, eatsMeat, favSport) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.favSport = favSport
  }
  watchSport(sport) {
    if (this.favSport == sport) {
      console.log(`I'm not doing anything until this ${sport} game is over`)
    }
    console.log("I'm bored")
  }
}