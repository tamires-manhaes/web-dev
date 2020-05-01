// não aceita repetição/não indexada
const times = new Set()
times.add('Osasco')
times.add('Rio de Janeiro')
times.add('Praia Clube')
times.add('Osasco')
times.add('Minas')
times.add('Sesi')

console.log(times)
console.log(times.size)
console.log(times.has('minas'))
console.log(times.has('Minas'))
times.delete('Rio de Janeiro')
console.log(times.has('Rio de Janeiro'))

const nomes = ['Raquel', 'Cássia', 'Bianca', 'Maisla']
const nomesSet = new Set(nomes)
console.log(nomesSet)