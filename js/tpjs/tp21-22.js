class Etudiant {
  constructor(nom, prenom, age, genre, pays, option, listeDesCours) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
    this.pays = pays;
    this.option = option;
    this.listeDesCours = listeDesCours;
  }

  setNom(nom) {
    this.nom = nom;
  }

  setPrenom(prenom) {
    this.prenom = prenom;
  }

  setOption(option) {
    this.option = option;
  }
}

const formation = {
  listeEleve: new Array(),
  inscriptionFormation: function (etudiant) {
    this.listeEleve.push(etudiant);
  },
  trieEleve: function (pays, prenomDerniereLettre, nomPremiereLettre, genre) {
    let listeTrie = new Array();
    let listeTemp = this.listeEleve;
    if (pays != "") {
      for (let etudiant of listeTemp) {
        if (pays.toUpperCase() == etudiant.pays.toUpperCase()) {
          listeTrie.push(etudiant);
        }
      }
      listeTemp = listeTrie;
      listeTrie = [];
    }
    if (prenomDerniereLettre != "") {
      for (let etudiant of listeTemp) {
        if (
          prenomDerniereLettre.toUpperCase() ==
          etudiant.prenom
            .toUpperCase()
            .substring(etudiant.prenom.length, etudiant.prenom.length - 1)
        ) {
          listeTrie.push(etudiant);
        }
      }
      listeTemp = listeTrie;
      listeTrie = [];
    }
    if (nomPremiereLettre != "") {
      for (let etudiant of listeTemp) {
        if (
          nomPremiereLettre.toUpperCase() ==
          etudiant.nom.toUpperCase().substring(0, 1)
        ) {
          listeTrie.push(etudiant);
        }
      }
      listeTemp = listeTrie;
      listeTrie = [];
    }
    if (genre != "") {
      for (let etudiant of listeTemp) {
        if (genre.toUpperCase() == etudiant.genre.toUpperCase()) {
          listeTrie.push(etudiant);
        }
      }
    }
    return listeTemp;
  },
};
