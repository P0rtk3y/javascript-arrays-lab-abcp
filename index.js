const app = "I don't do much."

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}



function destructivelyAppendKitten(name){
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.push(name);
  return kittens;
}

destructivelyAppendKitten("Ralph");

function destructivelyPrependKitten(name){
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift(name);
  return kittens
}

destructivelyPrependKitten("Bob");

function destructivelyRemoveLastKitten(){
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop();
  return kittens;
}

destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten(){
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift();
  return kittens;
}

destructivelyRemoveFirstKitten();

function appendKitten(name){
  kittens = ["Milo", "Otis", "Garfield"]
  return [...]
}