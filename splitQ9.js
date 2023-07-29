//Q9. What will the code below output to the console and why?
// var arr1 = "john".split(''); 
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


var arr1 = "john".split(''); //This line creates an array arr1 by splitting the string "john" into individual characters. After this line, arr1 will be ['j', 'o', 'h', 'n'].

var arr2 = arr1.reverse();//Here, arr1.reverse() reverses the elements of arr1 in place and returns the reversed array. So, arr2 will be a reference to the same array as arr1, but with the elements reversed. Thus, both arr1 and arr2 will be ['n', 'h', 'o', 'j'].

var arr3 = "jones".split('');//This line creates another array arr3 by splitting the string "jones" into individual characters. After this line, arr3 will be ['j', 'o', 'n', 'e', 's'].

arr2.push(arr3);//This line pushes the entire arr3 array as a single element into arr2. After this operation, arr2 will be ['n', 'h', 'o', 'j', ['j', 'o', 'n', 'e', 's']]. Note that arr1 will also be affected because arr2 is just a reference to arr1.

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));//This line prints the length and the last element of arr1. Since arr1 is ['n', 'h', 'o', 'j', ['j', 'o', 'n', 'e', 's']], the output will be:

console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));//This line prints the length and the last element of arr2. As mentioned earlier, arr2 is the same as arr1, so the output will be the same:

//OUTPUT
// array 1: length=5 last=j,o,n,e,s
// array 2: length=5 last=j,o,n,e,s