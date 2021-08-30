//retornar fatorial, onde fatorial de N = N*N-1*N-2... N=1

let fatore = 5;

const fatorar = (numero) => {
  let valor = numero;

  for (let i = 2; i <= numero - 1; i += 1) {
   valor = valor * i;
  }

  return valor;
}

console.log(fatorar(fatore));

const fatorialDeN = n => (n > 1) ? n * fatorialDeN(n - 1): 1;



console.log(fatorialDeN(4));