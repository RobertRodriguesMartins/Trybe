let names = {
	person1: 'João',
	person2: 'Maria',
	person3: 'Jorge'
}
for (let k in names) {
	console.log(`olá ${names[k]}`);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let i in car) {
	console.log(i, car[i]);
}
