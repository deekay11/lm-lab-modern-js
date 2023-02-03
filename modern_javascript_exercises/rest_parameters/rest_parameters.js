// Instructions can be found in rest_parameters.md

export function add(...nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}



