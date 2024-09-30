let myMap = new Map();

myMap.set('name', 'Vijay');
myMap.set('age', 24);

for(let [a,b] of myMap.entries()){
    console.log(a+" : "+b);
}
