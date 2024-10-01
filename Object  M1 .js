const profile={
    Name:'vijay',
    surname:'vipparthi',
    Age:24,
};
profile.fullName=function(){
    return this.surname+" "+this.Name+" \n"+
    (this.surname+" "+this.Name).toUpperCase();
}
console.log(profile.fullName());
