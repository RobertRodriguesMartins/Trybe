
function selecionarCor(evento) {
  let elemento = evento.target;
  let elementos = document.getElementsByClassName('selected');

  if (elementos.length > 0) {
    for (let i = 0; i < elementos.length; i += 1) {
        if (elemento === elementos[i]) {
          elemento.className = 'task';
        }
    }
  } else {
    elemento.className += ' selected';
  } 
}

function adicionarLegenda(cor){
  let criarDivComCor = document.createElement('div');
  criarDivComCor.style.backgroundColor = cor;
  criarDivComCor.className = 'task';
  criarDivComCor.addEventListener('click', selecionarCor);
  return criarDivComCor;
}

function adicionarSpan(tarefa, legenda) {
  let div = document.querySelector('.my-tasks');
  let span = document.createElement('span');
  span.innerText = tarefa;
  let corLegenda = adicionarLegenda(legenda);

  div.appendChild(span);
  div.appendChild(corLegenda);
}

function diminuirTamannhoLetra(evento) {
  let elemento = evento.target;
  elemento.style.fontSize = "";
}

function aumentarTamanhoLetra(evento) {
  let elemento = evento.target;
  elemento.style.fontSize = '30px';
}

function adicionarListenerLi() {
  let li = document.querySelectorAll('li.day')
  for (let i = 0; i < li.length; i += 1) {
    li[i].addEventListener('mouseover', aumentarTamanhoLetra);
    li[i].addEventListener('pointerout', diminuirTamannhoLetra);
  }
}
function modificarTextosElementosFriday(evento) {
  let elemento = evento.target;
  let valores = verValorDoBotao(elemento.value);
  elemento.value = valores[1];
  let listaElementosFriday = document.getElementsByClassName('friday');
  let listaDiasFriday = [4, 11, 18, 25];

  for (let i = 0; i < listaElementosFriday.length; i += 1) {
    if (elemento.value === 'true') {
      let elemento = listaElementosFriday[i];
      elemento.innerText = listaDiasFriday[i];
    } else {
      let elemento = listaElementosFriday[i];
      elemento.innerText = "Sexta-feira";
    }
  }

}

function adicionarListenerBtnFriday() {
  let btn = document.querySelector('#btn-friday');
  btn.addEventListener('click', modificarTextosElementosFriday);
}

function criarBtnFriday(frase) {
  let btn = document.createElement('button');
  btn.id = 'btn-friday';
  btn.value = true;
  btn.innerText = frase;

  let div = document.querySelector('.buttons-container');
  div.appendChild(btn);
}
function verValorDoBotao(valueDoBotao) {
  let cor = "";
  let valor = "";
  if (valueDoBotao === 'true') {
    cor = "rgb(238, 238, 238)";
    valor = false;
  } else if (valueDoBotao === "false") {
    cor = '#777';
    valor = true;
  }
  return [cor, valor];
}

function mudarCorDoBotao(evento){
  let btn = evento.target;
  let feriados = document.getElementsByClassName('holiday');
  let valoresDoBotao = verValorDoBotao(btn.value);
  let cor = valoresDoBotao[0];
  btn.value = valoresDoBotao[1];
  for (let i = 0; i < feriados.length; i += 1) {
    let elemento = feriados[i];
    elemento.style.color = cor;
  }
}

function adicionarListenerBtnHoliday() {
  let pegarBotao = document.getElementById('btn-holiday');
  pegarBotao.addEventListener('click', mudarCorDoBotao);
}

function criarBtnHoliday(frase) {
  let div = document.getElementsByClassName('buttons-container')[0];
  let btn = document.createElement('button');
  btn.id = 'btn-holiday';
  btn.value = true;
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
  
function chamarTodasAsMainFunctions() {
  createDaysOfTheWeek();
  fazerListaDiasDoMes();
  criarBtnHoliday('Feriados');
  adicionarListenerBtnHoliday();
  criarBtnFriday('Sexta-feira');
  adicionarListenerBtnFriday();
  adicionarListenerLi();
  adicionarSpan('cozinhar', 'blue');
  adicionarSpan('testar coisas', 'red');
}

window.onload = chamarTodasAsMainFunctions;

