// Referencias del DOM
const $h1 = document.querySelector("h1");

$h1.style.color = "blue";
$h1.style.fontSize = "60px";
$h1.style.textAlign = "center";
$h1.style.textTransform = "uppercase";
$h1.style.fontFamily = "Montserrat, sans-serif";
$h1.style.fontWeight = "700";

console.log($h1);

//const $h2 = document.querySelector("h2")
const $h2 = document.querySelector("#titulo2");
$h2.style.color = "red";
$h2.style.fontSize = "30px";

console.log($h2);

const $btnSumar = document.querySelector("#btnSumar");
const $num1 = document.querySelector("#num1"); // manera de recoger una variable cmo haciamos con jquery. mera costumbre cuando se trata de un objeto
const num2 = document.querySelector("#num2"); // actual que vale para todo

// cogemos el inout del resultado ****
const inputResultado = document.querySelector("#inputResultado");

// Eventos

$btnSumar.addEventListener("click", () => {
  console.log("Clickkkk");
  console.log("num1", $num1.value);
  console.log("num2", num2.value);

  // operamos y escribimos ****
  inputResultado.value = Number($num1.value) + Number(num2.value);
});
