function profile(Name,Age){
    this.Name=Name;
    this.Age=Age;
    this.Nation="India";
};
const person1=new profile("vijay",24);
const person2=new profile("sai",20);
console.log(person1.Age+" "+person1.Nation);
