const base = document.querySelector('.base');
const power = document.querySelector('.power');
const answer = document.querySelector('.answer');
function calcPower(baseNum, powNum) {
  let calc = 1;
  for (i = 0; i < powNum; i++) {
    calc *= baseNum;
  }
  return calc;
}

base.onchange = function() {
  const b = base.value;
  const p = power.value;
  answer.textContent = calcPower(b, p);
};

power.onchange = function() {
  const b = base.value;
  const p = power.value;
  answer.textContent = calcPower(b, p);
};

const reverseString = function(str) {
  let strFinal = '';
  let idxSpace = str.indexOf(' ');
  if (idxSpace > -1) {
    let arrStr = str.split(' ');
    for (i = arrStr.length; i > 0; --i) {
      console.log(i);
      strFinal += reverSingleWord(arrStr[i - 1]);
      console.log('final str ' + strFinal);
    }
  } else strFinal = reverSingleWord(str);

  return strFinal;
};
function reverSingleWord(str) {
  console.log('RSW: ' + str);
  let arrStr = str.split('');
  let returnStr = '';
  for (i = arrStr.length - 1; i >= 0; i--) {
    returnStr += arrStr[i];
  }
  console.log('RSW: ' + returnStr);
  return returnStr;
}
reverseString('hello there');

let objA = new Object();
objA = { name: 'Aditya', age: 32 };
console.log(objA.name);
console.log(objA.age);
console.log('name' in objA);
objA.age = 33;
console.log(objA.age);
delete objA.age;

let myObj = new Object();
let myObj2 = {};
console.log({ myObj });
console.log({ myObj2 });

function Account() {}
let newAccount = new Account();
console.log({ newAccount });

function Plant() {
  this.country = 'Mexico';
  this.isOrganic = true;
}
Plant.prototype.ShowNameAndColor = function() {
  console.log('I am a ' + this.name + ' and my color is ' + this.color);
};

function Fruit(fName, fColor) {
  this.name = fName;
  this.color = fColor;
}

Fruit.prototype = new Plant();
let ban = new Fruit('Banana', 'Yellow');
console.log({ ban });
console.log(ban.name);
console.log(ban.color);
console.log(ban.country);
ban.ShowNameAndColor();

function Student() {}

Student.prototype.SayName = function() {
  console.log(this.name);
};

function EighthGrader(name) {
  this.name = name;
  this.grade = '8';
}

EighthGrader.prototype = Object.create(Student.prototype);
let carl = new EighthGrader('Carl');
carl.SayName();
console.log({ carl });
console.log(carl.grade);

//factory pattern vs constructor pattern
const personFactory = (name, age) => {
  const sayHi = () => {
    console.log('Hola!');
  };
  return { name, age, sayHi };
};

let jeff = personFactory('Jefferson', '33');
console.log(jeff.name);
jeff.sayHi();

//object notation
// if the object name and the variable it refers to are exactly the same you can use the new condensed obj notation
let nom = 'Blah';
let bah = 'Blue';
console.log(nom, bah);
console.log({nom, bah})