//Q11 Check the below given code, if there are any issues, fix them and explain the output
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((acc, num) => {
//   if (num % 2 === 0) {
//     acc.evens.push(num);
//   } else {
//     acc.odds.push(num);
//   }
//   return acc;
// });
// console.log(result);

//Answer: reduce() is used without providing an initial value for the accumulator acc. This can lead to unpredictable results, especially when the array is empty or contains only one element.To fix the code, we should provide an initial value for the accumulator.

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.evens.push(num);
  } else {
    acc.odds.push(num);
  }
  return acc;
}, { odds: [], evens: [] }); // Providing initial value for the accumulator

console.log(result);//{ odds: [ 1, 3, 5 ], evens: [ 2, 4 ] }


//Explaination
//The code is using the reduce() function to segregate odd and even numbers from the numbers array. It starts with an empty object { odds: [], evens: [] } as the initial accumulator value.
//After processing all elements in the numbers array, the result will be an object with two properties: odds and evens. The odds property will contain an array with all the odd numbers from the original array, and the evens property will contain an array with all the even numbers from the original array.
// For the provided input array [1, 2, 3, 4, 5], the output will be:{ odds: [ 1, 3, 5 ], evens: [ 2, 4 ] }