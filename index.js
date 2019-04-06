// loop through two arrays to make one array with a for loop
function theBeatlesPlay(musicians, instruments) {
  let theBeatles = [];

  for (let i = 0; i < musicians.length; i++) {
    theBeatles[i] = `${musicians[i]} plays ${instruments[i]}`;
  }

  return theBeatles;
}

// add '!!!' to strings in an array with a while loop
function johnLennonFacts(factsArray) {
  let i = 0;

  while (i < factsArray.length) {
    factsArray[i] += '!!!';
    i++;
  }

  return factsArray;
}

// add a string to an array at least one time with a do while loop
function iLoveTheBeatles(int) {
  let love4Beatles = [];

  function counter() {
    return ++int;
  }

  do {
    love4Beatles.push('I love the Beatles!');
  } while (counter() < 15)

  return love4Beatles;
}
