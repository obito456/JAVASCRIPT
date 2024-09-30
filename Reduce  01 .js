const num=[1,2,3,4,5];
const sum=num.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(sum);
