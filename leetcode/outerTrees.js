// Given an array of [x, y] coordinates, determine the coordinates that are
// along the smallest possible perimeter, or "fence line."

var outerTrees = function(trees) {

  // find highest and lowest x and y coordinates ('edges' of fence)

  // the highest and lowest x values are definitely on the perimeter
  // the highest and lowest y values are definitely on the perimeter
};




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

// console.log(outerTrees([[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]));
// console.log(outerTrees([[1,2],[2,2],[4,2]]));

// FIRST SUBMISSION RESULTS:
// input: [[0,2],[1,1],[2,2],[2,4],[4,2],[3,3]]
// expected output: [[3,3],[4,2],[0,2],[1,1],[2,4]]
// my output: [[0,2],[1,1],[2,2],[2,4],[4,2],[3,3]]
