const profile={
    Name:'vijay',
    Age:24,
    details:function(){
        return this.Name+" "+this.Age;
    }
};
const a="Name";
const b="Age"; 
console.log(profile[a]+" "+profile[b]);
