const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


const media = (grades, index) => {
  const result = grades[index].reduce((soma, notaAtual) => {
  return soma + notaAtual;
  }, 0)
  return result/grades[index].length
}

function studentAverage(grades, students) {
  const novoArray = students.map((elemento, index) => {
  const medias = media(grades, index)
    return {name: elemento, average: medias}
  })
  return novoArray;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(grades, students), expected);