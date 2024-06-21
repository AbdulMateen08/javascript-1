const languages={
    js:'javascript',
    py:'python',
    java:'java',
    cpp:'c++',
    csharp:'c#',
}//syntax for keys of a object is obj[key]

for (const key in languages) {
    //console.log(`${key} is the shortcut of ${languages[key]}`);
    

}
let lan=['php','java','javascript'];
for (const key in lan) {
    //console.log(`${lan[key]}`);
 }

 const map=new Map();
 map.set('js','javascript'); //it wont work with this 
 map.set('py','python');
 map.set('java','java');
  
 for (const key in map) {
    console.log(`${map[key]}`);
    
 }
