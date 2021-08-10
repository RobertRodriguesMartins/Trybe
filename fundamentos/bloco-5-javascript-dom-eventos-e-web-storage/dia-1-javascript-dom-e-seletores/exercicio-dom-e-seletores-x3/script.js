function mudarCorHeader() {
  let header = document.getElementById("header-container");
  header.style.backgroundColor = "rgb(3, 107 ,8)";
}

function mudarCorSectionEmergencyTask() {
  let section = document.querySelector(".emergency-tasks");
  section.style.backgroundColor = "#e83e8c";
  }

function mudaBackgroundFilhos() {
  let filhos = document.querySelectorAll(".emergency-tasks h3");
  for(let i of filhos) {
    i.style.backgroundColor = "yellow";
  }
}

function mudarCorSectionNoEmergencyTask() {
  let section = document.querySelector(".no-emergency-tasks");
  section.style.backgroundColor = "yellow";
}

function mudaBackgroundFilhosNoEmergency() {
  let filhos = document.querySelectorAll(".no-emergency-tasks h3");
  for(let i of filhos) {
    i.style.backgroundColor = "#e83e8c";
  }
}

function mudaCorFooter() {
  let footer = document.getElementById("footer-container");
  footer.style.backgroundColor = 'rgb(3, 107 ,8)';
}

mudarCorHeader();
mudarCorSectionEmergencyTask();
mudaBackgroundFilhos();
mudarCorSectionNoEmergencyTask();
mudaBackgroundFilhosNoEmergency();
mudaCorFooter();