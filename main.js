// DOM references
const $h1 = document.querySelector("h1");

$h1.style.color = "green";
$h1.style.fontSize = "60px";
$h1.style.fontFamily = "Grotesk, sans-serif";

console.log($h1);

//const $h2 = document.querySelector("h2")
const $h2 = document.querySelector("#title2");
$h2.style.color = "red";
$h2.style.fontSize = "30px";

console.log($h2);

const $btnAdd = document.querySelector("#btnAdd");
const $btnSubtract = document.querySelector("#btnSubtract");
const $btnMultiply = document.querySelector("#btnMultiply");
const $num1 = document.querySelector("#num1"); // the $ prefix is a jQuery-era habit for variables holding DOM elements
const $num2 = document.querySelector("#num2");

// get the result input
const $inputResult = document.querySelector("#inputResult");

// Events

// ADDITION
$btnAdd.addEventListener("click", () => {
  console.log("Click");
  console.log("num1", $num1.value);
  console.log("num2", $num2.value);

  // convert, validate, calculate and write the result
  const a = Number($num1.value);
  const b = Number($num2.value);

  if (
    $num1.value === "" ||
    $num2.value === "" ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  ) {
    $inputResult.value = "Enter two valid numbers";
    return;
  }

  $inputResult.value = a + b;
});

// SUBTRACTION
$btnSubtract.addEventListener("click", () => {
  console.log("Click");
  console.log("num1", $num1.value);
  console.log("num2", $num2.value);

  // convert, validate, calculate and write the result
  const a = Number($num1.value);
  const b = Number($num2.value);

  if (
    $num1.value === "" ||
    $num2.value === "" ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  ) {
    $inputResult.value = "Enter two valid numbers";
    return;
  }

  $inputResult.value = a - b;
});

//MULTIPLICATION
$btnMultiply.addEventListener("click", () => {
  console.log("Click");
  console.log("num1", $num1.value);
  console.log("num2", $num2.value);

  // convert, validate, calculate and write the result
  const a = Number($num1.value);
  const b = Number($num2.value);

  if (
    $num1.value === "" ||
    $num2.value === "" ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  ) {
    $inputResult.value = "Enter two valid numbers";
    return;
  }

  $inputResult.value = a * b;
});
