function profile(Name,Age){
    this.Name=Name;
    this.Age=Age;
};
const person1=new profile("vijay",24);
person1.state="Andhra";
profile.prototype.Language="Telugu"
console.log(person1.state);
console.log(person1.Language);
