console.log("hello!");
// let x = 10;
// let y = 20;
// let z = "30";
// let res = x + y + z;
// document.getElementById("demo").innerHTML = res;
// console.log("querying button");
// const button = document.querySelector("button");
// console.log("defining onclick");
// button.onclick = function() {
//   let name = prompt("What is your name?");
//   alert(`Hello ${name} , nice to see you!`);
// };

let quoteStart = "Don't judge each day by the harvest you reap ";
let quoteEnd = "but by the seeds you plant.";
let finalQuote = quoteStart + quoteEnd;
// Don't edit the code below here!
const section = document.querySelector("section");
console.log("creating para");
let para1 = document.createElement("p");
para1.textContent = finalQuote;

section.appendChild(para1);
