const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => (dragon.strength - Math.floor(Math.random() * 36));
const warriorDamage = () => (warrior.strength * warrior.weaponDmg - Math.round(Math.random() * warrior.strength * (warrior.weaponDmg - 1)));
const mageDamage = () => {
  if (mage.mana >= 15) { 
    return {
      damage: 2 * mage.intelligence - Math.floor(Math.random() * (mage.intelligence + 1)),
      mana: mage.mana - 15,
    }
  } else {
    return {
      damage: 'Não possui mana suficiente!',
      mana: mage.mana,
    }

  }
};

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn(warriorDamage) {
    const damage = warriorDamage();
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },
  mageTurn(mageDamage) {
    const damageAndMana = mageDamage();
    if (typeof damageAndMana.damage === 'number')
      dragon.healthPoints -= damageAndMana.damage;
    mage.damage = damageAndMana.damage;
    mage.mana = damageAndMana.mana;
  },
  dragonTurn(dragonDamage) {
    const damage = dragonDamage();
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    dragon.damage = damage;
  },
  showTurn: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
console.log(gameActions.showTurn());
gameActions.mageTurn(mageDamage);
console.log(gameActions.showTurn());
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.showTurn());
gameActions.warriorTurn(warriorDamage);
console.log(gameActions.showTurn());
gameActions.mageTurn(mageDamage);
console.log(gameActions.showTurn());
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.showTurn());
gameActions.warriorTurn(warriorDamage);
console.log(gameActions.showTurn());
gameActions.mageTurn(mageDamage);
console.log(gameActions.showTurn());
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.showTurn());
gameActions.warriorTurn(warriorDamage);
console.log(gameActions.showTurn());
gameActions.mageTurn(mageDamage);
console.log(gameActions.showTurn());
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.showTurn());
gameActions.warriorTurn(warriorDamage);
console.log(gameActions.showTurn());
gameActions.mageTurn(mageDamage);
console.log(gameActions.showTurn());
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.showTurn());
gameActions.warriorTurn(warriorDamage);
console.log(gameActions.showTurn());
gameActions.mageTurn(mageDamage);
console.log(gameActions.showTurn());
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.showTurn());
gameActions.warriorTurn(warriorDamage);
console.log(gameActions.showTurn());
gameActions.mageTurn(mageDamage);
console.log(gameActions.showTurn());
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.showTurn());
gameActions.warriorTurn(warriorDamage);
console.log(gameActions.showTurn());
gameActions.mageTurn(mageDamage);
console.log(gameActions.showTurn());
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.showTurn());
gameActions.warriorTurn(warriorDamage);
console.log(gameActions.showTurn());
gameActions.mageTurn(mageDamage);
console.log(gameActions.showTurn());
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.showTurn());
gameActions.warriorTurn(warriorDamage);
console.log(gameActions.showTurn());
gameActions.mageTurn(mageDamage);
console.log(gameActions.showTurn());
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.showTurn());
