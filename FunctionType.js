//These are Types of function in JavaScript
function add(a,b)//This is Function Declaration
{
    console.log(a+b);
}
add(10,20);

const s= function(a,b) {return a+b;}//This is Function Expression
console.log(s(10,20));

const sum=(a,b)=>a+b;//This is Arrow Function
console.log(sum(10,20));
