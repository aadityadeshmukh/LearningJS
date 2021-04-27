let para = document.createElement("p");
para.textContent = "I am red";
document.body.append(para);
para.style.color = "red";

let head3 = document.createElement("h3");
head3.textContent = "I am blue h3";
head3.style.cssText = "color: blue";
document.body.append(head3);

let containerDiv = document.createElement("div");
containerDiv.classList.add = "container";
containerDiv.style.cssText =
  "border: 1px solid black; background-color: pink ; height: 100px";
document.body.append(containerDiv);

let head1 = document.createElement("h1");
head1.textContent = "I am inside a div";
containerDiv.appendChild(head1);

let childPara = document.createElement("p");
childPara.textContent = "Me too!";
containerDiv.appendChild(childPara);

//Events
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello!");
});

btn.addEventListener("click", function(e) {
  e.target.style.background = "blue";
});
