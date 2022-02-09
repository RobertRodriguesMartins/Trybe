const exercicio1 = require('./exercicio1');
const readData = require('./modulos');


// readLine.questionInt()
//exercio 1 OK
// const a = Math.floor(Math.random() * 100 + 1); 
// const b = Math.floor(Math.random() * 100 + 1); 
// const c = Math.floor(Math.random() * 100 + 1); 

// async function callExercise1() {
//   try {
//     const content = await exercicio1(a, b, c);
//     console.log(content);
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function callExercise2() {
//   try {
//     const result = await readData.findPeople(2);
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// }


// async function callExercise3() {
//   try {
//     const result = await readData.removePeople(10, 6);
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// }

// async function callExercise4() {
//   try {
//     const result = await readData.createNewFile();
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// }

// async function callExercise5() {
//   try {
//     const result = await readData.addAPerson('Nelson Muntz');
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// }

async function callExercise6() {
  try {
    const result = await readData.replaceAPerson('Nelson Muntz', 'Maggie Simpson');
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

// callExercise1();

// callExercise2()

callExercise6();
