const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = (acc, curr) => (curr % 2 === 0) ? acc + curr: acc;

const finalValue = numbers.reduce(sumEven, 0);

console.log(finalValue);

//using filter and reduce 

const n = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const even = n.filter(elemento => elemento % 2 === 0);

const fv = even.reduce((a, b) => a + b);

console.log(fv)