import { add, subtract, multiply } from "./functions.js";
import { searchHero } from "./api.js";

// DOM references
const $h1 = document.querySelector("h1");

$h1.style.color = "green";
$h1.style.fontSize = "60px";
$h1.style.fontFamily = "'Space Grotesk', sans-serif";

console.log($h1);

const $btnAdd = document.querySelector("#btnAdd");
const $btnSubtract = document.querySelector("#btnSubtract");
const $btnMultiply = document.querySelector("#btnMultiply");
const $num1 = document.querySelector("#num1"); // the $ prefix is a jQuery-era habit for variables holding DOM elements
const $num2 = document.querySelector("#num2");

// get the result input
const $inputResult = document.querySelector("#inputResult");

// Events

// Reads both inputs and runs the given operation.
// Shows a message instead if either input is empty or not a number.
function calculate(operation) {
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

  $inputResult.value = operation(a, b);
}

// FUNCTION ADDITION
$btnAdd.addEventListener("click", () => calculate(add));

// SUBTRACTION
$btnSubtract.addEventListener("click", () => calculate(subtract));

// MULTIPLICATION
$btnMultiply.addEventListener("click", () => calculate(multiply));

// Superhero API

const $btnSearchHero = document.querySelector("#btnSearchHero");
const $txtSearchHero = document.querySelector("#txtSearchHero");
const $searchMessage = document.querySelector("#searchMessage");
const $heroResults = document.querySelector("#heroResults");

// Builds a card for one hero.
// textContent is used (not innerHTML) so data from the API can never inject HTML.
function createHeroCard(hero) {
  const $card = document.createElement("article");
  $card.className = "hero-card";

  const $img = document.createElement("img");
  $img.src = hero.image.url;
  $img.alt = hero.name;
  $img.loading = "lazy";
  // The image site may block requests that say which page they came from
  $img.referrerPolicy = "no-referrer";
  // If the image still can't load, show the hero's first letter instead of a broken icon
  $img.addEventListener("error", () => {
    const $placeholder = document.createElement("div");
    $placeholder.className = "hero-placeholder";
    $placeholder.textContent = hero.name.charAt(0);
    $img.replaceWith($placeholder);
  });

  const $name = document.createElement("h3");
  $name.textContent = hero.name;

  const $details = document.createElement("p");
  const fullName = hero.biography["full-name"];
  const publisher = hero.biography.publisher;
  $details.textContent = [fullName, publisher]
    .filter((text) => text && text !== "null" && text !== "-")
    .join(" · ");

  $card.append($img, $name, $details);
  return $card;
}

async function handleSearch() {
  const name = $txtSearchHero.value.trim();
  $heroResults.replaceChildren();

  if (name === "") {
    $searchMessage.textContent = "Type a hero name first.";
    return;
  }

  $searchMessage.textContent = "Searching…";
  $btnSearchHero.disabled = true;

  const result = await searchHero(name);

  $btnSearchHero.disabled = false;

  if (result.error) {
    // The API says "character with given name not found" when nothing matches
    $searchMessage.textContent = result.error.includes("not found")
      ? `No heroes found for "${name}".`
      : `Something went wrong: ${result.error}`;
    return;
  }

  const count = result.results.length;
  $searchMessage.textContent = `${count} hero${count === 1 ? "" : "es"} found`;
  $heroResults.append(...result.results.map(createHeroCard));
}

$btnSearchHero.addEventListener("click", handleSearch);

// Pressing Enter in the search box also searches
$txtSearchHero.addEventListener("keydown", (event) => {
  if (event.key === "Enter") handleSearch();
});
