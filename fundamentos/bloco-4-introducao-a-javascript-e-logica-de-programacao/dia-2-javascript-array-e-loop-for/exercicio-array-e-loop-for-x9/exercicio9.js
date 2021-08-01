let array = [];
let divisao = [];
for (let i = 1; i < 26; i++) {
    array.push(i);
}

for (let i of array) {
    divisao.push(i%2);
}
console.log(divisao);