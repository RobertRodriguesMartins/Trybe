let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let i of numbers) {
	if (resultado === 0){
		resultado = i;
	}
	if(resultado > i) {
		resultado = i;
	}
}
console.log(resultado);
