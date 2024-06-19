const sys=Symbol("key1");

const Jsuser ={
    name: "Mohammed",
    [sys]:"mykey1",
    age:"24",
    occupation:"Software Engineer",
    login:false,
    loginweek:["monday","friday"]
}
// console.log(Jsuser);
// console.log(Jsuser["name"])
// console.log(Jsuser[sys])
// console.log(typeof Jsuser[sys]);
const greeting = function(){
    console.log("Hello "+Jsuser.name);
}
greeting();