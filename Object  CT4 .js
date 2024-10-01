function profile(Name,Age){
    this.Name=Name;
    this.Age=Age;
    this.info=function(){
        return this.Name+" "+this.Age;
    }
};
const person1=new profile("vijay",24);
person1.changeAge=function(age){
    return this.Age=age;
}
person1.changeAge(18);
console.log(person1.Age)
