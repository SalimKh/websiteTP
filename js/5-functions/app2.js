function addition(nombre1, nombre2) {
    nombre1 += 2
    nombre2 += 2
    console.log('Dans la fonction : ', nombre1, nombre2)
    let somme = nombre1 + nombre2
    return somme
}

let nb1 = 45
let nb2 = 20

addition(nb1, nb2)

const tb = [3, 4, 5]

function tt(arr) {
    arr.push('papy')
}

tt(tb) //arr=tb
