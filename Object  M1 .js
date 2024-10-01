const profile={
    Name:'vijay',
    surname:'vipparthi',
    Age:24,
};
profile.fullName=function(){
    return this.surname+" "+this.Name;
}
console.log(profile.fullName());
