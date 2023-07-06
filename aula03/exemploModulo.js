import dados from "./usuarios.json" assert {type: 'json'}

const divPrincipal = document.querySelector("#principal")

const usuarios = dados.usuarios

function renderizarUsuario(){
  debugger
  usuarios.map((usuario) => {
    debugger
    const h2 = document.createElement("h2")
    h2.innerText = usuario.nome

    const span = document.createElement('span')
    span.innerText = usuario.email

    divPrincipal.appendChild(h2)
    divPrincipal.appendChild(span)

  })
}

renderizarUsuario()