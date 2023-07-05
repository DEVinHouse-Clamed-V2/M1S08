// const usuario = {
//   nome: "Bruno",
//   idade: 24,
//   email: "bruno@email.com",
//   endereco: {
//     logradouro: "Rua 1",
//     numero: 10,
//     contatos: {
//       telefone: "8899999999"
//     }
//   }
// }

// const {nome, endereco: {logradouro, contatos: {telefone}}} = usuario // desestruturação
// // const nome, endereco, logradouro, contatos, telefone
// // const {logradouro} = endereco

// console.log(logradouro)

// const numeros = [10, 15, 12, 13]
// // a desestruturação é feita pelo index
// const [a] = numeros

// console.log(a)

// const usuariosList = [
//   {nome: "bruno", senha: 1234},
//   {nome: "pedro", senha: 1234},
//   {nome: "maria", senha: 1234},
//   {nome: "joao", senha: 1234},
// ]

// const [{nome}] = usuariosList

// console.log(nome)

// const frutas1 = ["Maça", "Abacaxi", "Limão"]
// const frutas2 = ["Banana", "Melancia", "Laranja"]

// const listaFrutas = [...frutas1, ...frutas2]

// frutas1[0] = "Morango"

// console.log(listaFrutas[0])

// // função nomeada
// function soma(a, b){
//   return a + b
// }
// // função anônima
// const soma2 = function (a, b){
//   return a + b
// }
// // função arrow function
// const soma3 = (a, b) => a + b
// console.log(soma3(10, 12))

// function soma(a, b){
//   return a + b
// }
// function subtrai(a, b){
//   return a - b
// }
// function executa(fn, a, b){
//   return fn(a, b)
// }

// console.log(executa(subtrai, 10, 12))

// const numeros = [10, 15, 12, 8, 6]

// const pares = numeros.filter((item) => item % 2 == 0)

// soma()
// subtrai()