let n = 5;
for (let i = 0; i < n+1; i++) {
	let frase = "";
	for (let k = 0; k < n+1; k++) {
		if (k >= (n+1)-i) {
			frase += "*"
		} else {
			frase += " ";
		}
	}
	console.log(frase);
}

// i == 2, n = n -i = 5-2 = 3 k = 3 k == n-i se k >= n-i frase append "*"