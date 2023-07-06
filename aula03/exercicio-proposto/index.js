const div = document.querySelector("#app")
const receitaCard = document.createElement("div")
let pagina = 0
const receitas = JSON.parse(dados)

exibirReceita()

function exibirReceita(){
  receitas.map(receita => {
    const receitaTitle = document.createElement('h1')
    receitaTitle.innerText = receita.nome
    
    receitaCard.appendChild(receitaTitle)
  })
  const receitaTitle = document.createElement('h1')
  receitaTitle.innerText = receitas[pagina].nome
  const receitaElement = document.createElement('div')

  receitaElement.innerHTML = `
    
    <img src='${receitas[pagina].imagem}' width='320px' />
  
    <h1>${receitas[pagina].nome}</h1>

    <h2>Ingredientes</h2>
    <ul>
      ${receitas[pagina].ingredientes.map(item => `<li>${item}</li>`).join('')}
    </ul>

    <h2>Instruções</h2>
    <ul>
      ${receitas[pagina].instrucoes.map(item => `<li>${item}</li>`).join('')}
    </ul>

  `
  
  // limpa o elemento div #app
  receitaCard.innerHTML = ""
  receitaCard.appendChild(receitaElement)
  
  div.appendChild(receitaCard)
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