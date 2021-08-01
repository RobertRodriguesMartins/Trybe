let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let i = 0; i < numbers.length; i++) {
	let valor = numbers[i];
	if(i > 0){
		if (resultado < valor) {
			resultado = valor;
		}
	}
}
console.log(resultado);
