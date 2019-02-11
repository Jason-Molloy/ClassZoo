class Alligator {
  constructor(species, eatsMeat, birthplace) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.birthplace = birthplace
  }
  eat(food) {
    if (food == "human") {
      console.log("I love to eat people!")
    } else if (food == "meat") {
      console.log("Good, MEAT! If it's not meat, I won't eat!")
    }
    console.log("who am I kidding? ...I'll eat anything")
  }
}
let gertie = new Alligator("American", true, "New Orleans");
let bruce = new Alligator("Chinese", true, "Lake Tai");
let alligators = [gertie, bruce];

class Bear {
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
let chili = new Bear("Polar", true, false);
let yogi = new Bear("Brown", true, true);
let bears = [chili, yogi];

class Cat {
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
let fred = new Cat("Fred", "Lynx", true, false);
let ethyl = new Cat("Ethyl", "Maine Coon", true, true);
let cats = [fred, ethyl];

class Dog {
  constructor(name, breed, eatsMeat, trained) {
    this.name = name
    this.breed = breed
    this.eatsMeat = eatsMeat
    this.trained = trained
  }
  getSlippers() {
    if (this.trained == true) {
      console.log("Your slippers, Master")
    }
    console.log("Zzzzzz")
  }
}
let rex = new Dog("Rex", "German Shepherd", true, true);
let jeff = new Dog("Jeff", "Cocker Spaniel", true, false);
let dogs = [rex, jeff];

class Elephant {
  constructor(species, eatsMeat, circus) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.circus = circus
  }
  perform() {
    if (this.circus == true) {
      console.log("Watch me perform!!")
    }
    console.log("What are you looking at?")
  }
}
let robert = new Elephant("African", false, false);
let pearl = new Elephant("Asian", false, true);
let elephants = [robert, pearl];


class Frog {
  constructor(species, eatsMeat, needsWater) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.needsWater = needsWater
  }
  worry() {
    if (this.needsWater == true) {
      console.log("I gotta stay in water, get me back into water. Hurry!!")
    }
    console.log("Hippity, Hoppity :) ")
  }
}
let mary = new Frog("Tree Frog", true, false);
let jerimaiah = new Frog("Bull Frog", true, true);
let frogs = [mary, jerimaiah];

class Goat {
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
let sam = new Goat("Mountain", false, false);
let gerald = new Goat("Domestic", false, true)
let goats = [sam, gerald]


class Hawk {
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
let sara = new Hawk("Red-tailed", true, 2);
let haduk = new Hawk("Sharp-shinned", true, 4);
let hawks = [sara, haduk]

class Iguana {
  constructor(species, eatsMeat, length) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.length = length
  }
  loneEnclosure() {
    if (this.length > 165) {
      console.log("Keep me by myself")
    }
    console.log("I can play with others")
  }
}
let iggy = new Iguana("Lesser Antillian", false, 172);
let izzy = new Iguana("American", false, 144);
let iguanas = [iggy, izzy]

class Jellyfish {
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
let dori = new Jellyfish("Box", true, true);
let adrian = new Jellyfish("Sea Nettle", true, false);
let jellyfishes = [dori, adrian]

class Kangaroo {
  constructor(species, eatsMeat, bornWild) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.bornWild = bornWild
  }
  greet() {
    if (this.bornWild == true) {
      console.log("G'day, Mate")
    }
    console.log("Good day, Sir")
  }
}
let steve = new Kangaroo("Antilopine", false, true);
let sheila = new Kangaroo("Red", false, false);
let kangaroos = [steve, sheila];

class Lemur {
  constructor(species, eatsMeat, nocturnal) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.nocturnal = nocturnal
  }
  nightVision() {
    if (this.nocturnal == true) {
      console.log("I can see pretty well in the dark")
    }
    console.log("Let me sleep if it's dark...")
  }
}
let julian = new Lemur("Dwarf", true, true);
let rachel = new Lemur("Bamboo", false, false);
let lemurs = [julian, rachel]

class Monkey {
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
let george = new Monkey("Capuchin", true, "shiny things");
let grace = new Monkey("Rhesus", true, "coins");
let monkeys = [george, grace]

class Newt {
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
let nigel = new Newt("Alpine", true, "hockey");
let nancy = new Newt("Spotted", true, "baseball");
let newts = [nigel, nancy]

class Owl {
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
let archimedes = new Owl("Barn", true, "mice");
let heloise = new Owl("Burrowing", true, "shepherd's pie");
let owls = [archimedes, heloise];

class Pig {
  constructor(species, eatsMeat, favMovie) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.favMovie = favMovie
  }
  watch(movie) {
    if (this.favMovie == movie) {
      console.log(`${this.favMovie} is the BEST!`)
    }
    console.log(`Why don't we watch ${this.favMovie}`)
  }
}
let dylan = new Pig("domestic", false, "Animal House");
let gertrude = new Pig("Wild Boar", true, "The Godfather II");
let pigs = [dylan, gertrude]

class Quail {
  constructor(species, eatsMeat, employed) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.employed = employed
  }
  getJob() {
    if (this.employed == false) {
      console.log("I can't find anything")
    }
    console.log("I'm always looking for something better...")
  }
}
let quentin = new Quail("California", true, false);
let queen = new Quail("Common", true, false);
let quails = [quentin, queen]


class Raven {
  constructor(species, eatsMeat, favBook) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.favBook = favBook
  }
  read(book) {
    if (this.favBook == book) {
      console.log(`${this.favBook} is the greatest thing ever written!`)
    }
    console.log(`Why don't I read ${this.favBook} instead`)
  }
}
let alice = new Raven("Chihuahua", true, "Under the Volcano");
let john = new Raven("Common", true, "Crime & Punishment");
let ravens = [john, alice]

class Sasquatch {
  constructor(species, eatsMeat, juggles) {
    this.species = species
    this.eatsMeat = eatsMeat
    this.juggles = juggles
  }
  learnJuggle() {
    if (this.juggles == true) {
      console.log("Let me show you my stuff")
    }
    console.log("I want to learn to juggle")
  }
}
let harry = new Sasquatch("Northwestern", true, true);
let rochelle = new Sasquatch("Apalachian", true, false)
let sasquatchi = [harry, rochelle]

class Tiger {
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
let tanya = new Tiger("Bengal", true, 3);
let tony = new Tiger("Siberian", true, 6);
let tigers = [tanya, tony];

class Uakari {
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
let jack = new Uakari("Bald", true, true);
let jill = new Uakari("Black-headed", true, false);
let uakaris = [jack, jill];

class Vulture {
  constructor(species, eatsMeat) {
    this.species = species
    this.eatsMeat = eatsMeat
  }
}

class Weasel {
  constructor(species, eatsMeat) {
    this.species = species
    this.eatsMeat = eatsMeat
  }
}

class Xerus {
  constructor(species, eatsMeat) {
    this.species = species
    this.eatsMeat = eatsMeat
  }
}

class Yak {
  constructor(species, eatsMeat) {
    this.species = species
    this.eatsMeat = eatsMeat
  }
}

class Zebra {
  constructor(species, eatsMeat) {
    this.species = species
    this.eatsMeat = eatsMeat
  }
}