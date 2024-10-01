function profile(Name,Age){
    this.Name=Name;
    this.Age=Age;
    this.info=function(){
        return this.Name+" "+this.Age;
    }
};
const person1=new profile("vijay",24);
profile.prototype.changeName=function(Name){
    return this.Name=Name;
}
person1.changeName("Rock");
console.log(person1.Name);
