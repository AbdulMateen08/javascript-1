//Immediatly invoke function expression

( function greeting(){   // Named IIFE 
    console.log("GoodMorning");
})();



( ()=>{
    console.log("GoodAfternoon");  // Unnamed IIFE using arrow function

})();                         
    


((name)=>{                        // IIFE using Arrow Function with  passing value
    console.log(`Good Afternoon ${name}`);
})("mateen");


