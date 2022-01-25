let age = 18

while (age < 18) {
    console.log('Désolé, cet endroit est reservé aux majeurs')
    age = age + 1
}

do {
    console.log('Désolé, cet endroit est reservé aux majeurs')
    age = age + 1
} while (age < 18)

console.log('Welcome, vous êtes devenu majeur')

// Break
const code = 'x0xeab2ppakjdkdjlasdjaslkdjaklsjlskjdkldjaslkdjs'
for (let i = 0; i < code.length; i++) {
    if (code[i] === '2') {
        console.log('trouvé!!!!!!')
        break
    } else {
        console.log('Pas trouvé')
    }
}

// continue
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i)
        continue
    }
    console.log('Impair')
}
