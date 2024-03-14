let display = document.querySelector(".display");

function appendToDisplay(value) {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function calculate() {
  let result = eval(display.textContent);
  display.textContent = result;
}
