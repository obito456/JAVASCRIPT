function profile(Name,Age){
    this.Name=Name;
    this.Age=Age;
    this.info=function(){
        return this.Name+" "+this.Age;
    }
};
const person1=new profile("vijay",24);
console.log(person1.info());
