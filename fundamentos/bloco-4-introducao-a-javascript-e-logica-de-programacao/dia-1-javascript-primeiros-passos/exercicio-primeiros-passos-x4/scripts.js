let notaCandidato = 80;
let resultado;

if (notaCandidato >= 80) {
  resultado = "aprovada";
} else if(notaCandidato < 80 && notaCandidato >= 60) {
  resultado = "lista";
} else {
  resultado = "reprovada";
};

switch (resultado) {
  case 'aprovada':
    console.log("Parabéns, você foi aprovado(a)");
    break;
  case 'lista':
    console.log("Você está na nossa lista de espera");
    break;
  case 'reprovada':
    console.log("Você foi reprovada(o)");
    break;
  default:
    console.log("não se aplica");
}

