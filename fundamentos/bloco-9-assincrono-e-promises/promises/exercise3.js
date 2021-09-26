const power = (array) => array.map((elemento) => elemento * elemento);

const calculateSum = (array) => array.reduce((acc, elemento) => {
  const val = acc;
  return val + elemento;
}, 0);


const promise = () => new Promise((resolve, reject) => {
    let cont = 10;
    const randomNumbers = []
    while (cont) {
      randomNumbers.push(Math.round(Math.random() * 50));
      cont -= 1;
    }
    const result = power(randomNumbers);
    const soma = calculateSum(result);

    if (soma >= 8000) return resolve(soma);

    return reject(`valor ${soma} abaixo de 8000 mil`);
  })

const call = async () => {
  const response = await promise()
    .catch((err) => console.log(new Error(err)));
  
  console.log(response)
}

call()