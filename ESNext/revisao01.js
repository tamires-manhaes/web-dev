// let e const
// let tem escopo de bloco
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Coder"
console.log(l, e, tras)