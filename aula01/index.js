// let value = "10.2"
// let a = value - 2 // 8
// let b = value * 2 // 20
// let c = value / 2 // 5
// let d = Number(value) + 2

// const numeros = [5, 12, 9, 13, 20]

// const dobro = numeros.map(n => n * 2)

// console.log(dobro)

// const pessoa = [
//   {nome: "bruno", idade: 24},
//   {nome: "pedro", idade: 28},
//   {nome: "maria", idade: 26},
// ]

// const pessoa2 = pessoa.map(p => ({ nome: p.nome, anoNasc: new Date().getFullYear() - p.idade}))

// console.log(pessoa2)

// const numeros = [5, 12, 9, 8]

// const pares = numeros.filter((n, index, array) => {
//   return n % 2 == 0
// })

// console.log(pares)

// let pessoas1 = [
//   {nome: "Ana", idade: 24},
//   {nome: "Bento", idade: 17},
//   {nome: "Leonardo", idade: 22},
// ]

// const pessoa2 = pessoas1.filter(pessoa => pessoa.idade > 18 && pessoa.nome.toLocaleUpperCase().includes('A'))

// console.log(pessoa2)


// const numeros = [5, 12, 9, 13, 20]

// let soma = numeros.reduce((total, n) => n + total, 10)

// console.log(soma)

let numeros = [12, 5, 2, 21, 8, 10, 50]

let soma = numeros.reduce((maior, n) => {
  // condicao ? verdade : falso
  return n > maior ? n : maior
})

console.log(soma)