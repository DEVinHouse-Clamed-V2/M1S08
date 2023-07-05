function somar3segundos(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a != 'number' || typeof b != 'number') {
      reject("É necessário que seja um número")
    }
    let soma = a + b
    resolve(soma)
  })
}

// somar3segundos("15", 34)
//   .then(resultado => console.log(resultado))
//   .catch(erro => console.error(erro))

async function executa() {
  try{
    const resultado = await somar3segundos("10", 12)
    console.log(resultado)
  } catch (erro) {
    console.log(erro.message)
  }
}

executa()

console.log("aqui é a linha 17")

