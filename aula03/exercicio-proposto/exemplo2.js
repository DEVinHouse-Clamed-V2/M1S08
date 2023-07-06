let pagina = 0
const receitas = JSON.parse(dados)

exibirReceita()

function exibirReceita(){
  const titulo = document.getElementById("titulo")
  titulo.innerText = receitas[pagina].nome

  const imagem = document.getElementById("imagem")
  imagem.setAttribute('src', receitas[pagina].imagem)

  const listaIngredientes = document.getElementById("listaIngredientes")
  
  receitas[pagina].ingredientes.map((item) => {
    const li = document.createElement("li")
    li.innerText = item
    listaIngredientes.appendChild(li)
  })

  const listaInstrucoes = document.getElementById("listaInstrucoes")

  receitas[pagina].instrucoes.map((item) => {
    const li = document.createElement("li")
    li.innerText = item
    listaInstrucoes.appendChild(li)
  })

}

function proximaPagina(){
  if(receitas.length == pagina){
    return
  }
  pagina++;
  exibirReceita()
}

function paginaAnterior(){
  if(pagina == 0){
    return
  }
  pagina--;
  exibirReceita()
}