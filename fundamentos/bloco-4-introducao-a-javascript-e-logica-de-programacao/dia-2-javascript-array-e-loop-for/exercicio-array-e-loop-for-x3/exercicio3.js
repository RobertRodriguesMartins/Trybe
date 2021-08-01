let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let elementos = numbers.length;
for (let i = 0; i < numbers.length; i++) {
	soma += numbers[i];
}
console.log(soma/elementos);
