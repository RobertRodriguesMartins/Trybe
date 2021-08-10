let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let n = 1;
//parte 1 exercício bonus.
// para cada iteração temos n += 1 ao final até que n === array.length-1
for (; n <= array.length -1 ; n++) {
  for (let i = 0; i < array.length -n; i++) {
    if(array[i] > array[i+1]) {
      let valori = array[i];
      array[i] = array[i+1];
      array[i+1] = valori;
    }
  }
}

// consola ordem crescente do array.
//console.log(array);

// parte 2 exercício bônus. printar array decrescente.
let array2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let nn = array2.length-1;


for (; nn >= 1 ; nn--) {
  for (let k = nn; k >= 1; k--) {
    if(k + 1 <= array2.length - 1) {
      if(array2[k] > array2[k-1]) {
        let valork = array2[k];
        array2[k] = array2[k-1];
        array2[k-1] = valork;
        if(array[k] < array2[k+1]){
          let valorj = array2[k];
          array2[k] = array2[k+1];
          array2[k+1] = valorj;
        }
      }
    } else {
      if(array2[k] > array2[k-1]) {
        let valork = array2[k];
        array2[k] = array2[k-1];
        array2[k-1] = valork;
      }
    }
  }
}
console.log(array2);


