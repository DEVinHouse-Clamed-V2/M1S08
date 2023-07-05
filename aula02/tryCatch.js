const usuario = {}

// undefined
try {
  console.log(usuario.endereco.logradouro)
} catch (erro) {
  if(erro.message.toLocaleLowerCase().includes('undefined')){
    console.log("Propriedade não existe")
    return
  }
  console.log(erro.message)
} finally {
  console.log("Aqui é o finally")
}