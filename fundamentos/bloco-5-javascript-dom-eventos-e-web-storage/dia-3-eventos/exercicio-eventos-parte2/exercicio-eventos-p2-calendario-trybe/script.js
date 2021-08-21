
function criarBtnHoliday(frase) {
  let div = document.getElementsByClassName('buttons-container')[0];
  let btn = document.createElement('button');
  btn.id = 'btn-holiday';
  btn.innerText = frase;

  div.appendChild(btn);
}

function checarFeriado(elemento) {
  let feriados = ['24', '25', '31'];
  for (let i = 0; i < feriados.length; i += 1) {
    if (elemento.innerText === feriados[i]) {
      return " holiday";
    }
  }
  return '';
}

function checarSextaFeira(elemento) {
  let sextas = ['4', '11', '18', '25'];
  for (let i = 0; i < sextas.length; i += 1) {
    if (elemento.innerText === sextas[i]) {
      return " friday";
    }
  }
  return '';
}

function fazerListaDiasDoMes() {
  const ul = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let li = document.createElement('li');
    li.innerText = dezDaysList[i];
    li.className = "day";
    li.className += checarFeriado(li);
    li.className += checarSextaFeira(li);
    ul.appendChild(li);
  }
}

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}; 
  
// Escreva seu código abaixo.
function chamarTodasAsMainFunctions() {
  createDaysOfTheWeek();
  fazerListaDiasDoMes();
  criarBtnHoliday('Feriados');
}

chamarTodasAsMainFunctions()

