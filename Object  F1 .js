const profile={
    Name:'vijay',
    Age:24,
    details:function(){
        return this.Name+" "+this.Age;
    }
};
console.log(profile.details());
