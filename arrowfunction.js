const obj={
    username : "mohammed",
    welcomemessage:function(){
        console.log(`welcome ${this.username}`)
    }
}
// obj.welcomemessage()
// obj.username="sam"
// obj.welcomemessage()
// console.log(this)

// function greeting(){
//     console.log(this);
// }
// greeting()
// console.log(this) // window object

// const chai= () => { // Arrow functions
//     console.log(this)
// }
// chai() // window object

const twonumber=(num1,num2)=>{ //explisit explist return
    return num1+num2


}
console.log(twonumber(2,4));

const onenumber=(num1,num2)=> (num1+num2) //inplist return
console.log(onenumber(2,4))