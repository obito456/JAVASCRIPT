let myMap = new Map();

myMap.set('name', 'Vijay');
myMap.set('age', 24);

myMap.forEach((value,key) => {
    console.log(key+" : "+value);
})
