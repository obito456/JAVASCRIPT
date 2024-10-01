const profile={
    Name:'vijay',
    Age:24,
};
let res="";
for(let x in profile){
    res=res+profile[x]+" ";
}
console.log(res);
