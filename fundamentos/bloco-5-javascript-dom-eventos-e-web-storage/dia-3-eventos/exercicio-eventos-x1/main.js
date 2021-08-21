const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

 
// Copie esse arquivo e edite apenas ele;
// Crie uma função que adicione a classe 'tech' ao elemento selecionado;

// 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function deletarClasse(elemento) {
  let li = document.getElementsByClassName("tech");
  for (let e of li) {
    if(e !== elemento) {
      e.className = "";
    }
  }
 }

 function getNumbersOfTechElements(elemento) {
  let quantidade = document.getElementsByClassName("tech").length;
  if(quantidade > 1) {
    deletarClasse(elemento);
  }
}

 function mudarClasse(evento) {
   let elemento = evento.target;
   elemento.className = "tech";
   getNumbersOfTechElements(elemento);
 }

 //  Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

 function escreverEmTech(evento) {
  let elemento = evento.target;
  let li = document.getElementsByClassName('tech');
  li[0].innerText = elemento.value;
  
 }

//  Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
//  redirecione para alguma página;

 function abrirPagina() {
  let url = "https://www.google.com";
  window.open(url, "_blank");

 }

//  Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
//  a cor do mesmo;

function mudarCor(e)  {
  let elemento = e.target;
  let cores = ['blue', 'red', 'brown', 'grey', 'black'];
  elemento.style.color = cores[Math.round(Math.random() * 4)];
}

 window.onload = () => {
    const li = document.getElementsByTagName("li");
   for (let elemento of li) {
     elemento.addEventListener("click", mudarClasse);
   }

   const input = document.getElementById('input');
   input.addEventListener('keyup', escreverEmTech)

   const titulo = document.getElementById('my-spotrybefy');
   titulo.addEventListener('dblclick', abrirPagina);
   titulo.addEventListener('mouseover', mudarCor);
  
 }

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
