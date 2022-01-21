const display = document.getElementById("display");
const tpNbr = document.getElementById("tp-nbr");

function changeDisplay(texte) {
  display.innerText = texte;
}

/////////////////////////   TP  ///////////////////////
function tp1() {
  changeTpNbr(1);
  let nbr1 = 10;
  let nbr2 = 15;
  const somme = nbr1 + nbr2;
  alert("Bienvenue sur la page de formulaire");
  changeDisplay(
    "nbr1 = " + nbr1 + "\n nbr2 = " + nbr2 + "\n La somme est " + somme
  );
}

function tp2() {
  changeTpNbr(2);
  let distance = prompt("Entrer la distance parcourus (en mètres) : ");
  let temps = prompt("Entrer le temps (en secondes) : ");
  let vitesse = distance / temps;
  changeDisplay("La vitesse est de " + vitesse + "m/s");
}

function tp3() {
  changeTpNbr(3);
  let age = parseInt(prompt("Entrer l'âge de l'enfant: "));
  console.log(age);
  switch (true) {
    case age > 17:
      changeDisplay("Ce n'est plus un enfant!");
      break;
    case age >= 16:
      changeDisplay("L'enfant est dans la catégorie Cadet.");
      break;
    case age >= 14:
      changeDisplay("L'enfant est dans la catégorie Minime.");
      break;
    case age >= 12:
      changeDisplay("L'enfant est dans la catégorie Benjamin.");
      break;
    case age >= 10:
      changeDisplay("L'enfant est dans la catégorie Pupille.");
      break;
    case age >= 7:
      changeDisplay("L'enfant est dans la catégorie Poussin.");
      break;
    default:
      changeDisplay("L'enfant est trop jeune!");
  }
}

function tp4() {
  changeTpNbr(4);
  let email = prompt("Entrer votre email : ");
  let mdp = prompt("Entrer votre mot de passe : ");
  if (
    email === prompt("Entrer à nouveau votre email : ") &&
    mdp === prompt("Entrer à nouveau votre mot de passe : ")
  ) {
    changeDisplay("Bienvenu dans votre espace client");
  } else {
    changeDisplay("Identifiants incorrect");
  }
}

function tp5() {
  let name = prompt("Entrer votre nom et prenom :");
  let voyelle = "";
  let consonne = "";
  let carac = "";
  for (const iterator of name) {
    carac = iterator[0].toUpperCase();
    if (
      carac == "A" ||
      carac == "E" ||
      carac == "I" ||
      carac == "O" ||
      carac == "U" ||
      carac == "Y"
    ) {
      voyelle += carac;
    } else if (
      carac == "B" ||
      carac == "C" ||
      carac == "D" ||
      carac == "F" ||
      carac == "G" ||
      carac == "H" ||
      carac == "J" ||
      carac == "K" ||
      carac == "L" ||
      carac == "M" ||
      carac == "P" ||
      carac == "Q" ||
      carac == "R" ||
      carac == "S" ||
      carac == "T" ||
      carac == "V" ||
      carac == "W" ||
      carac == "X" ||
      carac == "Z"
    ) {
      consonne += carac;
    }
  }
  changeDisplay(
    "Nom = " + name + "\n Voyelle = " + voyelle + "\n Consonne = " + consonne
  );
}
