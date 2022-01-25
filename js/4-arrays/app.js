const fruits = ['pommes', 'mangues', 'oranges']
const numbers = [1, 3, 6, 7, 9, 2]
const booleans = [true, false, false, 4 > 5]
const mixedArr = [1, 'papy', true, ['aa', 'bb']]

const names = []
const noms = new Array()

// push : insert at the end
fruits.push('ananas') //O(1)

// pop : remove at the end
fruits.pop() //O(1)

// remove at the beginning
fruits.shift() //O(n)

// add at the beginning
fruits.unshift('erer') //O(n)

// Tableau à n dimension

const matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice.length; j++) {
        console.log(matrice[i][j])
    }
}
