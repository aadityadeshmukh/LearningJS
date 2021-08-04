console.log('Hello man!');
const Player = (name, level) => {
  const getLevel = () => level;
  const getName = () => name;
  let health = level * 2;
  const die = () => {};
  const damage = x => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level > enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName };
};

let p1 = Player('Jim', 10);
let p2 = Player('Dwight', 7);
console.log(p1.getName());
p1.attack(p2);

const Person = name => {
  const sayName = () => console.log(name);
  return { sayName };
};

const Nerd = name => {
  const { sayName } = Person(name);
  const sayNerdStuff = () => {
    console.log('Nerd, Nerd, Nerd');
  };
  return { sayName, sayNerdStuff };
};

const dude = Nerd('Dude');
dude.sayName();
dude.sayNerdStuff();

//module pattern
const Calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mult, div };
})();
console.log(Calculator.add(3, 6));
console.log(Calculator.mult(3, 6));
console.log(Calculator.sub(5500, 4432));
console.log(Calculator.div(5500, 5));
