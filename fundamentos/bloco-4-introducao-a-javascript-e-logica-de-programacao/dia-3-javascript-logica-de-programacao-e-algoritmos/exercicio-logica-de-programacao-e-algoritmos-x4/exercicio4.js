// setar n = x;
//asteriscos === meio-contador,meio,meio+contador 

let n = 5;
let frase = "";
let meio = ((n-1)/2)+1;


for (let i = 0; i < n+1; i++) {
  let frase = "";
  if (i % 2 === 1 || i === 1) {
    for (let k = 0; k < n+1; k++) {
      if(k < meio - i || k > meio + i) {
        frase += " ";
      } else {
        frase += "*";
      }
    }
  }
  console.log(frase);
}

