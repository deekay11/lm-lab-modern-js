// Instructions can be found in rest_parameters.md

// function add(a, b) {
//   // Add a loop here
//   return a + b;
// }

// add(1, 2, 3, 4, 5);

// module.exports = add;
export function add(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}



