function sum(x){
    return function(y){
    return x+y;
    }
}
const num=sum(5);
console.log(num(10));
