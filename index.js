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
  }

  return factsArray;
}
