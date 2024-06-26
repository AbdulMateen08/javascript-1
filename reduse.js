// const arr=[1,2,3,4];    // using reduse functionn using explist method
// const total=arr.reduce(function(acc,curVal){
//     return acc+curVal;
// },0)          // we have to declare the accumulate value here

// console.log(total);

//using reduse  function using implist method

// const arr=[1,2,3,4];
// const total=arr.reduce((acc,curVal)=>(acc+curVal),0)
// console.log(total);


//making a shoping cart using reduce function

const shopingCart=[{
    itemsName:'java course',
    itemsPrice:1000
},
{
    itemsName:'Python course',
    itemsPrice:2000
},
{
    itemsName:'Block Chain Course',
    itemsPrice:20000
},
{
    itemsName:'Datascience Course',
    itemsPrice:2000
},
{
    itemsName:'Youtube course',
    itemsPrice:0
},
]

const totalMoney=shopingCart.reduce((acc,curVal)=>(acc+curVal.itemsPrice),0)
console.log(totalMoney);

