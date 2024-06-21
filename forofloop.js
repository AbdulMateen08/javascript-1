let greeting="hello world"
for (const greet of greeting) {

    if (greet==" ") {
                continue;

    }
    //console.log(`the value is ${greet}`);  
}
//Maps and ittretor 

const map = new Map();
map.set('IN', "India");
map.set('CH',"China");
map.set('FR',"france");
//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}