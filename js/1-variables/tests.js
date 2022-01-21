// const age = parseInt(prompt('age : '))

// if (age >= 18) {
//     alert('Vous êtes majeur')
// } else {
//     alert('Accès interdit: Vous êtes mineur(e)')
// }

// const estMajeur = age >= 18
// if (estMajeur) {
//     alert('Vous êtes majeur')
// }

// !!!!!!!!!!!!!!!!!Attention!!!!
// let nom = 'Jean'
// if (nom = '') {
//     alert('Vous vous appelez Christian')
// }

//approche 1
// const pays = prompt('Pays : ')
// if (pays.toLowerCase() === 'france') {
//     alert('Bonjour')
// } else if (pays.toLowerCase() === 'usa') {
//     alert('Good morning')
// } else if (pays.toLowerCase() === 'allemagne') {
//     alert('Guten tag')
// } else {
//     alert('fdsjfjhdshfdk')
// }

//approche 2
let pays = prompt('Pays : ')
pays = pays.toLowerCase()
if (pays === 'france') {
    alert('Bonjour')
} else if (pays === 'usa') {
    alert('Good morning')
} else if (pays === 'allemagne') {
    alert('Guten tag')
} else {
    alert('fdsjfjhdshfdk')
}
