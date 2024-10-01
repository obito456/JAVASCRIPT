const profile={
    Name:'vijay',
    Age:24,
};
let res="";
for(let[x,y] of Object.entries(profile)){
    res=res+x+" : "+y+"\n";
}
console.log(res);
