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

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, element){
  array.push(element);
  return array;
}

