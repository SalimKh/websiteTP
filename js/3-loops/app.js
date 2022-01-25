// Syntaxe
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Utilisation
const name = 'Christian Lisangola'

// for (let i = 0; i < name.length; i++) {
//     console.log(`${i}  =>  ${name[i]}`) //name[0]
// }

//
console.log('For classique')
console.log('=============')
for (let i = 0; i < name.length; i++) {
    console.log(`${name[i]}`) //name[0]
}
// console.log(prenom)
// for...of
console.log('For of')
console.log('======')
for (let caractere of name) {
    console.log(caractere)
}
