let n = 5;
let frase = "";
for (let i = 1; i < n+1; i++) {
	let frase = "";
	for(let j = 1; j < n+1; j++) {
		frase += "*";
	}
console.log(frase);
}

//modo 1; meio redundante pois fica setando frase
// o tempo todo.
//tentar separar isso para setar uma vez e consolar em n;

console.log("parte 2////////////////////////////////");
let k = 5;
let frase2 = "";
for(let j = 1; j < n+1; j++) {
	frase2 += "*";
}
for (let i = 1; i < n+1; i++) {
	console.log(frase2);
}

//modo 3 poderia ser usando um método de string como o <string>.repeat(n);
