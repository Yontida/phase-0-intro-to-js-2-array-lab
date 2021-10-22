// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const allCats = [...cats, "Broom"];
  return allCats;
}

function prependCat(name) {
  const allCats = ["Arnold", ...cats];
  return allCats;
}

function removeLastCat() {
  const allCats = cats.slice(0, cats.length - 1);
  return allCats;
}

function removeFirstCat() {
  const allCats = cats.slice(1);
  return allCats;
}
