const spinWords = (string) => {
  // split words on spaces
  const wordArr = string.split(' ');

  // loop over wordArr and reverse words with a length of 5 characters or more
  spunWordArr = wordArr.map((w) => {
    if (w.length >= 5) {
      return w.split('').reverse().join('');
    }
    return w;
  });

  return spunWordArr.join(' ');
};

console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
