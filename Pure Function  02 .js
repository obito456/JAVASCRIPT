//impure
let x = 10;

function add(a) {
  return a + x;  
}
console.log(add(5));  
x = 20;
console.log(add(5)); 
