// const arr=[1,2,3,4,5,6]
// arr.filter((items)=>{
//     console.log(items)
// })

const books =[{
    title:'maths', class:'5',publish:'2000',edition:'2010'
},{
title:'science', class:'7',publish:'2000',edition:'2011'
},
{
    title:'social', class:'6',publish:'2000',edition:'2014'
    },
{
title:'hindi', class:'8',publish:'2010',edition:'2021'
},
]
let userInput=(books.filter((bk)=> {
    
    return bk.title=='maths' 

}));
userInput=(books.filter((bk)=>bk.class==='8'))
console.log(userInput);