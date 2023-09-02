// Write your code here!
const main = document.getElementById("main");

document.body.removeChild(main);

const newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory");
newHeader.textContent = "Mohammed is the champion";
document.body.append(newHeader);
