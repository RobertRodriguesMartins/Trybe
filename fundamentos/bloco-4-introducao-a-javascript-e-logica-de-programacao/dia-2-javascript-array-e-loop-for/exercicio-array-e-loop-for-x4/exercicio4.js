let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let elementos = numbers.length;
for (let i = 0; i < numbers.length; i++) {
	soma += numbers[i];
}

if (soma/elementos > 20) {
	console.log("valor maior que 20");
}  else {
	console.log("valor menor que 20.");
}
