// function addnumber(number1 , number2)
// {
//     let result = number1 + number2;
//     return result;
// }
// const r1=addnumber(3,5)

// console.log(r1);

// 
// const myobj = {
//     name: "john",
//     age: 30,    
//     salary:2300
// }

// function handleObj (anyObj){
//     console.log(`Username is ${anyObj.name} and age is ${anyObj.age} and salary is ${anyObj.salary}`);
// }
// handleObj(myobj);  //output: Username is john and age is 30 and salary is

// const arr=[100,200,400]
// function handleArray(anyArray){
//     console.log(`the second value of the array${anyArray[1]}`)
// }
// handleArray(arr);


function addtocart(...cart){ // the ... is use to define n number of values
    return `the cart value${cart}`

}
console.log(addtocart(200,400,500));