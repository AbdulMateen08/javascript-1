// maps chaining with filter 
const arr=[1,2,3,4,5,6]
const arr2=arr.map((item)=>{return item*10}).map((items)=>items+1).filter((item)=>item>40);
console.log(arr2);