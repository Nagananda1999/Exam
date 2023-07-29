// Q7. Use Array.reduce() method to reverse the following given arrayconst arr = [1, 2, 3, 4, 5]

const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((accumulator, currentValue) => {
  return [currentValue, ...accumulator];
}, []);

console.log(reversedArr); // Output: [5, 4, 3, 2, 1]

