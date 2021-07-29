let a = 60;
let b = 60
let c = 60;
if (typeof a === typeof 1 && typeof b === typeof 1 && typeof c === typeof 1) {
  if ( a > 0 && b > 0 && c > 0) {
    if ((a + b + c) === 180) {
      console.log("triangulo válido.");
    } else {
      console.log("ângulos válidos mas triangulo inválido.");
    }
  } else {
    console.log("ângulo negativo...");
  }
} else {
 console.log("Digite um número...");
} 