console.log("hello");
let output = document.querySelector(".output");
output.innerHTML = "";
for (i = 10; i >= 0; i--) {
  let paraString = "";
  if (i == 10) paraString = "Starting countdown";
  else if (i == 0) paraString = "Blast Off!";
  else paraString = i;

  let para = document.createElement("p");
  para.textContent = paraString;
  output.append(para);
}
