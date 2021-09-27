function encodeMudaBusca(indice) {
  let ar = 'aeiou';
  return ar[indice];
}

function encode(s) {
  let cont = 1;
  let str = s;
  for (let i = 0; i < 6; i += 1) {
    let letra = encodeMudaBusca(i);
    for (let k = 0; k < s.length; k += 1) {
      if (letra === s[k]) {
        str = str.replace(letra, cont);
      }
    }
    cont += 1;
  }
  return str;
}

function decodeMudaBusca(index) {
  let ar = '12345';
  return ar[index];
}

function decode(s) {
  let str = s;
  for (let i = 0; i < 6; i += 1) {
    let numero = decodeMudaBusca(i);
    for (let k = 0; k < s.length; k += 1) {
      if (numero === s[k]) {
        str = str.replace(numero, encodeMudaBusca(i));
      }
    }
  }
  return str;
}

module.exports = {
  encode,
  decode
}