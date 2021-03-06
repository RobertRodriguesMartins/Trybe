const retornarMaiorPalavra = (palavra) => {
  const numeroDePalavras = palavra.split(" ").length
  let maior =  "";
  const palavrasDivididas = palavra.split(" ");
  for (let i of palavrasDivididas) {
    if (i.length > maior.length) {
      maior = i;
    }
  }
  return maior;
}

let resultado = retornarMaiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu")

console.log(resultado);

//recursiva 

const recursivaRetornaMaior = palavra => palavra.split(" ").sort((a, b) =>  b.length - a.length)[0];

console.log(recursivaRetornaMaior("Antônio foi no banheiro e não sabemos o que aconteceu"));