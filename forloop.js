// for (let i = 1; i <= 10; i++) {
//     console.log(`Table ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + "*" + j + "=" + i*j );
        
//     }
    
// }
// break and contine
for (let index = 1; index < 10; index++) {
    if (index==5) {
        console.log(`the value is 5 break`);
        break;
    }
    console.log(`value is ${index}`);
    
    
}

for (let index = 1; index < 10; index++) {
    if (index==5) {
        console.log(`the value is 5 break and continue`);
        continue;
    }
    console.log(`value is ${index}`);
    
    
}