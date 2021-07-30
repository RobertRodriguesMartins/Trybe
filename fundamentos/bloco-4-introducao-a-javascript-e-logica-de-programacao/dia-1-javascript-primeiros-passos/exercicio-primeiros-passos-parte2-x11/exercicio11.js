let salarioBruto = 1283.56;
let salarioBase = 0;

let inss = 0;
let inssMax = 0;

let ir = 0;
let parcelaIr = 0;

let valorFinal = 0;

if (salarioBruto <= 1556.94) {
  inss = 8;
} else if ( salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  inss = 9;
} else if ( salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  inss = 11;
} else {
  inssMax = 570.88;
}

salarioBase = salarioBruto - (salarioBruto * (inss/100));


if (salarioBase <= 1903.98) {
  ir = 0;
  parcelaIr = 0;
} else if ( salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  ir = 7.5;
  parcelaIr = 142.80;
} else if ( salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  ir = 15;
  parcelaIr = 354.80;
} else if ( salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  ir = 22.5;
  parcelaIr = 636.13; 
}  else {
  ir = 27.5;
  parcelaIr = 869.36; 
}

if (ir === 0) {
  console.log(`Valor final do salário ${salarioBruto} com inss descontado: `, salarioBase);
} else {
  let salarioFinal = (salarioBase - ((salarioBase * (ir/100)) - parcelaIr));
  console.log(salarioFinal);
}

