let a = [1, 2, 2, 3, 4, 4, 5];
let unique = a.filter((num, index, arr) => arr.indexOf(num) === index);
console.log(unique);
