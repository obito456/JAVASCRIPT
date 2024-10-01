const profile={
    Name:'vijay',
    Age:24,
    details:function(){
        return this.Name+" "+this.Age;
    }
};
profile.Nationality="Indian";
const a="Name";
const b="Age"; 
console.log(profile[a]+" "+profile[b]+" "+profile.Nationality);


