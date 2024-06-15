// const arr=[1,2,4,5];
// //console.log(arr);
// const arry = new Array(5,2)
// console.log(arry);
// arry.push(1,3,4);
// console.log(arry);

const arr=[1,2,3,4,5];
const my = arr.slice(2,4); 
console.log(my); // output: [3,4]
console.log(arr); // output: [1,2,3,4,5] (original
const my2 = arr.splice(2,4);
console.log(my2);
console.log(arr); // output: [1,2] (modified)

// Note that splice modifies the original array, whereas 
// slice returns a new array without modifying the original.