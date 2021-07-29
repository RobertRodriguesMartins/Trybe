let peca = "DaMa";

console.log("peças disponíveis: Cavalo, Rei, Peão, Torre, Bispo e Dama");
if ( typeof peca === typeof "m"){
  peca = peca.toLowerCase();

  switch (peca) {
    case "cavalo":
      console.log("anda 3 casas. Movimentação em L");
      break;
    case "rei":
      console.log("anda 1 casa. qualquer direção.");
      break;
    case "peão":
      console.log("anda 1 casa. apenas na vertical, nunca para atrás.");
      break;
    case "torre":
      console.log("Anda x casas. movimentação ortogonal, em apenas um sentido ao escolher direção.");
      break;
    case "bispo":
      console.log("anda x casas. movimentação diagonal conforme cor do tabuleiro.");
      break;
    case "dama":
      console.log("movimentação overpower. anda x casas");
      break;
    default:
      console.log("Peça não existe.");
  }
} else {
  console.log("Digite um nome válido...");
}
