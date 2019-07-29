// injected in index.html

// document.getElementsByClassName("main-div").setClassName("main-text");

const newDiv = document.createElement("div");

newDiv.setClassName("main-text");
console.log("NewDiv : ", newDiv);
const body = document.querySelector("body");

body.appendChild(newDiv);
