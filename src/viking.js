// Soldier
class Soldier {
  constructor(health, strength){
  this.health = health;
  this.strength = strength;
  }
  attack() {
return this.strength
  }
  receiveDamage(damage) {
this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    super.receiveDamage(damage)
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return "Odin Owns You All!";
}
}

// Saxon
class Saxon extends Soldier{
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
this.health = this.health - damage;
if(this.health > 0){
  return `A Saxon has received ${damage} points of damage`
  }else{
    return "A Saxon has died in combat"
  } 
  }
}


// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
this.saxonArmy.push(saxon);
  }
  vikingAttack(){
let random1 = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
let random2 = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
const damage = random2.receiveDamage(random1.strength);
if(random2.health <= 0){
  this.saxonArmy.splice(this.saxonArmy.indexOf(random2));
}
return damage;
 }
 saxonAttack(){
  let random1 = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  let random2 = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  const damage = random1.receiveDamage(random2.strength);
  if(random1.health <= 0){
  this.vikingArmy.splice(this.vikingArmy.indexOf(random1));
  }
  return damage;
 }
  showStatus(){
if(this.vikingArmy >= 0){
  return "Saxons have fought for their lives and survived another day..."
}else if(this.saxonArmy >= 0){
  return "Vikings have won the war of the century!" 
}
else{
  return  "Vikings and Saxons are still in the thick of battle."
}
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
