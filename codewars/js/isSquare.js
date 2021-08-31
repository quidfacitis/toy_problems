var isSquare = function (n) {
  // handle negative number edge case
  if (n < 0) {
    return false;
  }
  // handle edge cases for 0 and 1
  if ((n * n) === n) {
    return true;
  }

  const checkIfSquare = (x, incremented) => {
    // if n is hit, return true
    if (x * x === n) {
      return true;
    }

    // if less than n, begin incrementing n progressively by 1
    if (x * x < n) {
      while (x * x < n) {
        x += 1;
      }
      return checkIfSquare(x, true);
    }

    // if n is passed after incrementing, then return false.
    if (x * x > n && incremented) {
      return false;
    } else if (x * x > n && !incremented) { // if n is passed
      // without incrementing, divide number by 2 again
      while (x * x > n) {
        x = Math.floor(x / 2);
      }
      return checkIfSquare(x, false);
    }
  };

  // when second argument is set to "true," that means checkIfSquare
  // will have tested, one by one, all the numbers that could have
  // been a square root of the input
  return checkIfSquare(Math.floor(n / 2), false);
};

console.log(isSquare(25));