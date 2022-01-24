const display = document.getElementById("display");
const tpNbr = document.getElementById("tp-nbr");
const imageDisplay = document.getElementsByClassName("card-img-top")[0];

function changeDisplay(texte) {
  display.innerText = texte;
}

function changeTpNbr(nbr) {
  tpNbr.innerText = nbr;
}

function changeImageDisplay(imageName) {
  imageDisplay.setAttribute("src", "../images/" + imageName);
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
  changeImageDisplay("vitesse.jpg");
  let distance = prompt("Entrer la distance parcourus (en mètres) : ");
  let temps = prompt("Entrer le temps (en secondes) : ");
  let vitesse = distance / temps;
  changeDisplay("La vitesse est de " + vitesse + "m/s");
}

function tp3() {
  changeTpNbr(3);
  changeImageDisplay("judo.jpg");
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
  changeImageDisplay("login.png");
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

function tpBonus() {
  changeTpNbr("BONUS");
  changeImageDisplay("lettre.png");
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

function tp5() {
  changeTpNbr(5);
  changeImageDisplay("login.png");
  let i = 0;
  let login = false;
  let email = prompt("Entrer votre email : ");
  let mdp = prompt("Entrer votre mot de passe : ");
  let emailLogin;
  let mdpLogin;
  do {
    emailLogin = prompt("Entrer votre email : ");
    mdpLogin = prompt("Entrer votre mot de passe : ");
    if (email === emailLogin && mdp === mdpLogin) {
      changeDisplay("Bienvenu dans votre espace client");
      login = true;
    } else {
      alert("Identifiants incorrects");
      i++;
    }
  } while (i < 5 && !login);
  if (i >= 5) {
    changeDisplay(
      "Vous avez saisi des mauvais identifiants " +
        i +
        " fois, votre compte est bloqué"
    );
  }
}

function tp6() {
  changeTpNbr(6);
  changeImageDisplay("chiffre.jpg");
  let chiffre = 0;
  do {
    chiffre = parseInt(prompt("Entrer un chiffre entre 1 et 3 : "));
    if (chiffre > 3) {
      alert("Plus petit !");
    } else if (chiffre < 1) {
      alert("Plus grand !");
    }
  } while (chiffre < 1 || chiffre > 3);
  changeDisplay("Votre chiffre : " + chiffre);
}

function tp7() {
  changeTpNbr(7);
  changeImageDisplay("chiffre.jpg");
  let chiffre = 0;
  do {
    chiffre = parseInt(prompt("Entrer un chiffre entre 10 et 20 : "));
    if (chiffre > 20) {
      alert("Plus petit !");
    } else if (chiffre < 10) {
      alert("Plus grand !");
    }
  } while (chiffre < 10 || chiffre > 20);
  changeDisplay("Votre chiffre : " + chiffre);
}

function tp8() {
  changeTpNbr(8);
  changeImageDisplay("chiffre.jpg");
  changeDisplay("");
  let chiffre = parseInt(prompt("Entrer un chiffre : "));
  for (let i = 0; i < 10; i++) {
    chiffre++;
    changeDisplay(display.innerText + chiffre + "\n");
  }
}

function tp9() {
  changeTpNbr(9);
  changeImageDisplay("chiffre.jpg");
  changeDisplay("");
  let chiffre = parseInt(prompt("Entrer un chiffre : "));
  for (let i = 1; i <= chiffre; i++) {
    switch (true) {
      case i % 5 == 0 && i % 3 == 0:
        changeDisplay(display.innerText + "fizzbuzz\n");
        break;
      case i % 5 == 0:
        changeDisplay(display.innerText + "buzz\n");
        break;
      case i % 3 == 0:
        changeDisplay(display.innerText + "fizz\n");
        break;
      default:
        changeDisplay(display.innerText + i + "\n");
        break;
    }
  }
}

function tp12() {
  changeTpNbr(12);
  changeImageDisplay("chiffre.jpg");
  const monTableau = [5, 9, 8, -6];
  let somme = 0;
  changeDisplay("[" + monTableau + "]");
  for (let valeur of monTableau) {
    somme = somme + parseInt(valeur);
  }
  changeDisplay(display.innerText + "\nLa somme est " + somme);
}

function tp13() {
  changeTpNbr(13);
  changeImageDisplay("chiffre.jpg");
  const monTableau = [5, 9, 8, -6];
  let somme = 0;
  changeDisplay("[" + monTableau + "]");
  for (let valeur of monTableau) {
    somme = somme + parseInt(valeur);
  }
  changeDisplay(display.innerText + "\nLa somme est " + somme);
  changeDisplay(
    display.innerText + "\nLa moyenne est " + somme / monTableau.length
  );
}

function tp14() {
  changeTpNbr(14);
  changeImageDisplay("chiffre.jpg");
  let tailleTableau = parseInt(prompt("Quelle est la taille du tableau ?"));
  const monTableau = [];
  for (let i = 1; i < tailleTableau; i++) {
    monTableau.push(prompt("Entrer le prochain chiffre du tableau :"));
  }
  changeDisplay("Tableau : [" + monTableau + "]");
  let petit = monTableau[0];
  let grand = monTableau[0];
  for (let valeur of monTableau) {
    if (valeur < petit) {
      petit = valeur;
    } else if (valeur > grand) {
      grand = valeur;
    }
  }
  changeDisplay(
    display.innerText +
      "\nLe plus petit chiffre est " +
      petit +
      "\nLe plus grand chiffre est " +
      grand
  );
}

function tp15() {
  changeTpNbr(15);
  changeImageDisplay("chiffre.jpg");
  const liste1 = new Array();
  const liste2 = new Array();
  const liste3 = new Array();
  let tailleListe = 0;
  tailleListe = parseInt(prompt("Quelle est la taille des deux listes ?"));
  for (let i = 0; i < tailleListe; i++) {
    liste1.push(parseInt(prompt("Entrer le prochain chiffre de la liste 1 :")));
    liste2.push(parseInt(prompt("Entrer le prochain chiffre de la liste 2 :")));
  }
  changeDisplay(
    "Liste 1 : [ " +
      liste1 +
      " ]\nListe 2 : [ " +
      liste2 +
      " ]\nListe 3 (résultante) : [ "
  );

  for (let i = 0; i < tailleListe; i++) {
    liste3[i] = liste1[i] + liste2[i];
    changeDisplay(display.innerText + liste3[i] + "(");

    changeDisplay(display.innerText + liste1[i] + " + " + liste2[i] + ") ");
  }
  changeDisplay(display.innerText + "]");
}

function tp16() {
  changeDisplay("");
  changeTpNbr(16);
  changeImageDisplay("chiffre.jpg");
  const matrice = [];
  let tailleMatrice = 0;
  tailleMatrice = parseInt(prompt("Quelle est la taille de la matrice ?"));
  for (let i = 0; i < tailleMatrice; i++) {
    matrice[i] = new Array();
    for (let j = 0; j < tailleMatrice; j++) {
      matrice[i][j] = parseInt(
        prompt("Entre la prochaine valeur de la matrice :")
      );
    }
  }

  for (let iterateur of matrice) {
    changeDisplay(display.innerText + "[");
    for (let valeur of iterateur) {
      changeDisplay(display.innerText + " " + valeur);
    }
    changeDisplay(display.innerText + " ]\n");
  }

  let i = 0;
  let somme = 0;
  for (let iterateur of matrice) {
    somme += iterateur[i];
    i++;
  }
  changeDisplay(display.innerText + "\n La somme de la diagonale est " + somme);
}
