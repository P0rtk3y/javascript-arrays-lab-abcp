const app = "I don't do much."

function addElementToBeginningOfArray(element, array){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(element, array){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(element, array){
  return [...array, element];
}

function destructivelyAppendKitten(element, array){
  array.push(element);
  return array;
}

