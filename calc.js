const calculator = document.querySelector(".calc-container");
var numSelected = "";
var num1;
var num2;
var count = 0;
var result = 0;
var opSelected = "";
// event delegation
calculator.addEventListener("click", function(event) {
  if (event.target.classList.contains("number-box")) {
    numSelected = numSelected + event.target.innerText;
    document.querySelector(".first-box").innerText = numSelected;
  }

  if (event.target.classList.contains("op-box")) {
    if (
      count === 0 &&
      event.target.classList.contains("back-arrow-box") === false
    ) {
      opSelected = opSelected + event.target.innerText;
      num1 = parseInt(numSelected);
      numSelected = "";
      count++;
    }
    num2 = parseInt(numSelected);
    
    if (event.target.classList.contains("equals")) {
      document.querySelector(".first-box").innerText = handleEquals(
        num1,
        num2,
        opSelected
      );
      numSelected = result;
      count = 0;
      opSelected = "";
    }

    if (event.target.classList.contains("clear-box")) {
      clearResult();
    }
    if (event.target.classList.contains("back-arrow-box")) {
      handleBackArrow();
    }
  }
});

function handleEquals(num1, num2, opSelected) {
  if (opSelected === "+") {
    result = num1 + num2;
  } else if (opSelected === "-") {
    result = num1 - num2;
  } else if (opSelected === "/") {
    result = num1 / num2;
  } else if (opSelected === "x") {
    result = num1 * num2;
  }
  return result;
}

function clearResult() {
  result = 0;
  numSelected = "";
  count = 0;
  opSelected = "";
  document.querySelector(".first-box").innerText = "0";
}

function handleBackArrow() {
  if (numSelected === "" || numSelected.length === 1) {
    clearResult();
  } else {
    numSelected = numSelected.toString().slice(0, -1);
    document.querySelector(".first-box").innerText = numSelected;
  }
}
