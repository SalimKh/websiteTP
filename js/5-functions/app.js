function addition(nombre1, nombre2) {
    let somme = nombre1 + nombre2
    return somme
}

function estMajeur(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

function estMajeur(age) {
    if (age >= 18) {
        return true
    }
    return false
}

function estMajeur(age) {
    return age >= 18 ? true : false
}

function estMajeur(age) {
    return age >= 18
}

function direBonjour(prenom) {
    console.log(`Bonjour ${prenom}`)
    // return `Bonjour ${prenom}`
}

direBonjour('Anatole')

// const message = direBonjour('Anatole')


