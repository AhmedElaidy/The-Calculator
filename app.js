// Declaring variables
let display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
let circleContainer = document.querySelector(".theme-shape");
let circle = document.querySelector(".circle-shape");
let value1 = "";
let value2 = "";
let operator = +"+";
let shape = 1;
// Setting display max length

// Clicking on any number (function).
numbers.forEach(function (number) {
  number.addEventListener("click", function (e) {
    let elemnt = e.currentTarget.innerText;
    let classList = e.currentTarget.classList;
    if (classList.contains("del")) {
      display.innerText = display.innerText.slice(0, -1);
    } else if (classList.contains("reset")) {
      display.innerText = "";
      value1 = "";
      value2 = "";
      operator = "";
    } else if (classList.contains("plus")) {
      value1 = +display.innerText;
      display.innerText = "";
      operator = "+";
    } else if (classList.contains("minus")) {
      value1 = +display.innerText;
      display.innerText = "";
      operator = "-";
    } else if (classList.contains("multiply")) {
      value1 = +display.innerText;
      display.innerText = "";
      operator = "*";
    } else if (classList.contains("divid")) {
      value1 = +display.innerText;
      display.innerText = "";
      operator = "/";
    } else if (classList.contains("equal")) {
      value2 = +display.innerText;
      if (operator === "+") {
        display.innerText = value1 + value2;
      } else if (operator === "-") {
        display.innerText = value1 - value2;
      } else if (operator === "*") {
        display.innerText = value1 * value2;
      } else if (operator === "/") {
        display.innerText = value1 / value2;
      } else {
        display.innerText = "Error!";
      }
    } else {
      display.innerText += elemnt;
      
    }
  });
});

// Clicking on theme changer (function).
circleContainer.addEventListener("click", function () {
  shape++;
  if (shape > 3) {
    shape = 1;
  }
  circle.classList.remove("circle-shape-1");
  circle.classList.remove("circle-shape-2");
  circle.classList.remove("circle-shape-3");
  circle.classList.add(`circle-shape-${shape}`);
  if (circle.classList.contains("circle-shape-1")) {
    shapeOne();
  } else if (circle.classList.contains("circle-shape-2")) {
    shapeTwo();
  } else if (circle.classList.contains("circle-shape-3")) {
    shapeThree();
  }
});

// Themes that the calculator switches between.
function shapeOne() {
  document.documentElement.style.setProperty("--primary-color-1","hsl(222, 26%, 31%)");
  document.documentElement.style.setProperty("--primary-color-2","hsl(0, 0%, 100%)");
  document.documentElement.style.setProperty("--primary-color-3","hsl(224, 36%, 15%)");
  document.documentElement.style.setProperty("--primary-color-4","hsl(223, 31%, 20%)");
  document.documentElement.style.setProperty("--primary-color-5","hsl(225, 21%, 49%)");
  document.documentElement.style.setProperty("--primary-color-7","hsl(6, 63%, 50%)");
  document.documentElement.style.setProperty("--primary-color-8","hsl(30, 14%, 63%)");
  document.documentElement.style.setProperty("--primary-color-9","hsl(226, 28%, 36%)");
  document.documentElement.style.setProperty("--primary-color-10","hsl(6, 70%, 34%)");
  document.documentElement.style.setProperty("--primary-color-11","hsl(0, 0%, 100%)");
  document.documentElement.style.setProperty("--primary-color-12","hsl(6, 70%, 34%)");
  document.documentElement.style.setProperty("--primary-color-13","hsl(221, 14%, 31%)");
}
function shapeTwo() {
  document.documentElement.style.setProperty("--primary-color-1","hsl(0, 0%, 90%)");
  document.documentElement.style.setProperty("--primary-color-2","hsl(0, 0%, 90%)");
  document.documentElement.style.setProperty("--primary-color-3","hsl(0, 0%, 93%)");
  document.documentElement.style.setProperty("--primary-color-4","hsl(0, 5%, 81%)");
  document.documentElement.style.setProperty("--primary-color-5","hsl(185, 42%, 37%)");
  document.documentElement.style.setProperty("--primary-color-7","hsl(25, 98%, 40%)");
  document.documentElement.style.setProperty("--primary-color-8","hsl(30, 14%, 63%)");
  document.documentElement.style.setProperty("--primary-color-9","hsl(185, 58%, 25%)");
  document.documentElement.style.setProperty("--primary-color-10","hsl(25, 99%, 27%)");
  document.documentElement.style.setProperty("--primary-color-11","hsl(60, 10%, 19%)");
  document.documentElement.style.setProperty("--primary-color-12","hsl(25, 98%, 40%)");
  document.documentElement.style.setProperty("--primary-color-13","hsl(60, 10%, 19%)");
}

function shapeThree() {
  document.documentElement.style.setProperty("--primary-color-1","hsl(268, 75%, 9%)");
  document.documentElement.style.setProperty("--primary-color-2","hsl(268, 75%, 9%)");
  document.documentElement.style.setProperty("--primary-color-3","hsl(268, 71%, 12%)");
  document.documentElement.style.setProperty("--primary-color-4","hsl(268, 71%, 12%)");
  document.documentElement.style.setProperty("--primary-color-5","hsl(281, 89%, 26%)");
  document.documentElement.style.setProperty("--primary-color-7","hsl(176, 100%, 44%)");
  document.documentElement.style.setProperty("--primary-color-8","hsl(290, 70%, 36%)");
  document.documentElement.style.setProperty("--primary-color-9","hsl(285, 91%, 52%)");
  document.documentElement.style.setProperty("--primary-color-10","hsl(177, 92%, 70%)");
  document.documentElement.style.setProperty("--primary-color-11","hsl(52, 100%, 62%)");
  document.documentElement.style.setProperty("--primary-color-12","hsl(176, 100%, 44%)");
  document.documentElement.style.setProperty("--primary-color-13","hsl(52, 100%, 62%)");
  document.querySelector(".del").style.color = "white"
  document.querySelector(".reset").style.color = "white"
  
}
