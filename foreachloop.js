//  {const animal=['lion','tiger','dog']; //one way of declaring the  
//     animal.forEach(function(element){  //foreach loop with explist
//         console.log(element);           //function

//  })}

// {
//     const animal=['lion','tiger','dog'];
//     animal.forEach((element) =>{ //foreach with arrow
//         console.log(element)

//     })
// }

// const animal=['lion','tiger','dog']
// function readme(element){
//     console.log(element);
// }
// animal.forEach(readme)  //using foreach with function



const animal=[{
    name:'lion',
    age:5
},
{
    name:'tiger',
    age:7
},
{
    name:'dog',
    age:3
}]

animal.forEach((items)=>{
    console.log(items);

})