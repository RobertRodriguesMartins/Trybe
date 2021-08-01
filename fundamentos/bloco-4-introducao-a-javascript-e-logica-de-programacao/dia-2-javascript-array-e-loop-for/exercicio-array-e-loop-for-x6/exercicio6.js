let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for (let i of numbers) {
	if(i % 2 === 1) {
		impar += 1;
	}
}
if (impar > 0) {
	console.log(impar);
} else {
	console.log("nennhum valor impar encontrado.");
}