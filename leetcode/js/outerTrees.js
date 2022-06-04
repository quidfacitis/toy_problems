// Given an array of [x, y] coordinates, determine the coordinates that are
// along the smallest possible perimeter, or "fence line."

var outerTrees = function(trees) {

  // EDGE CASE -- what if there are four coordinates or fewer
    // --> return those coordinates

  // find highest and lowest x and y coordinates (definite 'edges' of fence)
  const perimeter = [];

  const getHighLowCoords = (arr, coord) => {
    const cIndex = coord === 'x' ? 0 : 1;
    let lowestValue = trees[0];
    let highestValue = trees[0];

    for (let i = 1; i < trees.length; i++) {
      if (trees[i][cIndex] < lowestValue[cIndex]) {
        lowestValue = trees[i];
      } else if (trees[i][cIndex] > highestValue[cIndex]) {
        highestValue = trees[i];
      }
    }
    perimeter.push(lowestValue);
    perimeter.push(highestValue);
  }

  getHighLowCoords(trees, 'x');
  getHighLowCoords(trees, 'y')

  return perimeter;
  // plot the coordinates between these points

  const plotCoords = (pArr, d) => {
    let startC = pArr[0];
    let endC = pArr[0];

    if (d === 'u-r') {
      // get lowest 'x' and highest 'y'
    }

    if (d === 'd-r') {
      // get highest 'y' and highest 'x'
    }

    if (d === 'd-l') {
      // get highest 'x' and lowest 'y'
    }

    if (d === 'u-l') {
      // get lowest 'y' and lowest 'x'
    }
  };


  // for each of the coordinate lines, check if any remaining coordinates fall 'outside' the line
    // if so, get the most extreme outlier and get coordinate lines between it and the two points it falls between
      // perform the same 'outlier' check on those points (recursive function)

};

console.log(outerTrees([[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]])); // [[1,1], [4, 2], [2, 0], [2,4]]
// console.log(outerTrees([[1,2],[2,2],[4,2]]));
console.log(outerTrees([[0,2],[1,1],[2,2],[2,4],[4,2],[3,3]])); // [[0,2], [4,2], [1,1], [2,4]]

// FIRST SUBMISSION RESULTS:
// input: [[0,2],[1,1],[2,2],[2,4],[4,2],[3,3]]
// expected output: [[3,3],[4,2],[0,2],[1,1],[2,4]]
// my output: [[0,2],[1,1],[2,2],[2,4],[4,2],[3,3]]




// FIRST SOLUTION -- it was wrong to assume that x values with two or more
// y values should automatically have the highest and lowest y values included
// in the perimeter

// var outerTrees = function(trees) {
//     const perimeter = {};

//     // look at x value of each coordinate pair
//     trees.forEach((t) => {
//       const x = t[0];
//       const y = t[1];

//       // put y value for that x in a storage object (an array of y values)
//       // if the x key doesn't have a value, initialize the y array with y
//       // else, add y to array
//       perimeter[x] = perimeter[x] === undefined ? [y] : [...perimeter[x], y];

//       // if y array is longer than 2
//       if (perimeter[x].length > 2) {
//         // remove 'middle' value
//         const yValues = perimeter[x];
//         let lowestValue = yValues[0];
//         let highestValue = yValues[0];
//         // determine highest and lowest values
//         for (let i = 1; i < yValues.length; i++) {
//           if (yValues[i] < lowestValue) {
//             lowestValue = yValues[i];
//           } else if (yValues[i] > highestValue) {
//             highestValue = yValues[i];
//           }
//         }
//         perimeter[x] = [lowestValue, highestValue];
//       }
//     });

//     // finally, grab all coordinate pairs out of storage object
//     const fenceCoordinates = [];

//     for (const key in perimeter) {
//       perimeter[key].forEach((y) => {
//         fenceCoordinates.push([Number(key), y]);
//       });
//     }

//     return fenceCoordinates;
// };