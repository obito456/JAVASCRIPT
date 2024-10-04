let greet1= (Name)      => "Good Morning "+Name;
let greet2=  Name       => "Good Morning "+Name;
let greet3= (Name,age)  => "Good Morning "+Name +age;
let greet4=  Name,22    => "Good Morning "+Name +age;

console.log(greet1("vijay"));
console.log(greet2("ajay"));
console.log(greet3("sai",22));
console.log(greet4("ramesh",24));
