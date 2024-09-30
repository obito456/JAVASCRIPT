let threshold = { limit: 3 };

let num = [1, 2, 3, 4, 5];
let filtered = num.filter(function (num) {
  return num > this.limit;
}, threshold);

console.log(filtered);
