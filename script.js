console.log("hello!");
// let x = 10;
// let y = 20;
// let z = "30";
// let res = x + y + z;
// document.getElementById("demo").innerHTML = res;
console.log("querying button");
const button = document.querySelector("button");
console.log("defining onclick");
button.onclick = function() {
  let name = prompt("What is your name?");
  alert("Hello " + name + ", nice to see you!");
};
