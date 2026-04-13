
const obj={
    id:1,
    name:"harshitha",

    ar:["hello",102,null,true,8.237]
}
console.log(obj.loc);

obj.loc="hyderabad"

console.log(obj);

console.log(obj.ar);


const user=[
    {
        id:1,
        name:"harshitha",
        loc:"hyderabad"
    },
    {
        id:2,
        name:"yathika",
        loc:"hyderabad"
    }
]
//console.log(user);
//console.log(user[0].name);
//console.log(user[0]);
//for in-objects
for (const key in user) {
    if (!Object.hasOwn(user, key)) continue;
    
    const element = user[key]; 
    console.log(element); 
}

//for of-arrays
for (const element of user) {
    console.log(element);
}