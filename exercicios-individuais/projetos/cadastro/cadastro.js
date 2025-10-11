let usuarios = JSON.parse(localStorage.getItem("cadastro_usuarios")) || []



// TELAS
const telaLista = document.querySelector("#tela-lista")
const telaCadastro = document.querySelector("#tela-cadastro")


// TABELA DE USUÁRIO
const tableUsuario = document.querySelector("#user-table-body")



// BOTÕES
const btnVoltarLista = document.querySelector("#btn-voltar-lista")
const btnAdicionar = document.querySelector("#btn-adicionar")


// FORMULÁRIO DE USUÁRIO
const userForm = document.querySelector("#user-form")


// INPUTS DO FORMULÁRIO
const inputId = document.querySelector("#user-id");
const inputNome = document.querySelector("#user-nome");
const inputSobrenome = document.querySelector("#user-sobrenome");
const inputEmail = document.querySelector("#user-email");
const inputCep = document.querySelector("#user-cep");
const inputRua = document.querySelector("#user-rua");
const inputNumero = document.querySelector("#user-numero");
const inputComplemento = document.querySelector("#user-complemento");
const inputBairro = document.querySelector("#user-bairro");
const inputCidade = document.querySelector("#user-cidade");
const inputEstado = document.querySelector("#user-estado");
const inputObs = document.querySelector("#user-obs");


// BTN
const btnBuscarCep = document.querySelector("#btn-buscar-cep");
const btnSalvar = document.querySelector("button[type='submit']");





function mostrarTelaLista() {
    telaLista.classList.remove("d-none")
    telaCadastro.classList.add("d-none")
    renderizarUsuarios()
}

function mostrarTelaCadastro() {
    telaLista.classList.add("d-none")
    telaCadastro.classList.remove("d-none")
}


// SALVA O USUÁRIO, APÓS O SUBMIT DO BTN salvarUsuario
const salvarUsuario = () => {

    const idDate = Date.now()
    const objUsuario = {
        id: inputId.value || idDate,
        nome: inputNome.value,
        sobrenome: inputSobrenome.value,
        email: inputEmail.value,
        rua: inputRua.value,
        numero: inputNumero.value,
        complemento: inputComplemento.value,
        bairro: inputBairro.value,
        cidade: inputCidade.value,
        estado: inputEstado.value,
        obs: inputObs.value
    }

    usuarios.push(objUsuario)
    mostrarTelaLista()
    salvarUsuarioLocalStorage()
}


function inicializar() {

    // ADICIONA O ESCUTADOR NOS BOTÕES DE FLUXO DE TELA
    btnVoltarLista.addEventListener("click", mostrarTelaLista)
    btnAdicionar.addEventListener("click", mostrarTelaCadastro)

    // ADICIONA O ESCUTADOR NO BOTÃO DE SALVAR USUÁRIO
    userForm.addEventListener("submit", salvarUsuario)
    mostrarTelaLista()

    tableUsuario.addEventListener("click", (event) => {
        const target = event.target.closest("button")
        if (!target) return

        const id = Number(target.dataset.id)

        if (isNaN(id)) return

        if (target.classList.contains("btn-warning")) {
            editarUsuario(id)
        } else if (target.classList.contains("btn-danger")) {
            excluirUsuario(id)
        }

    })
}
function renderizarUsuarios() {

    tableUsuario.innerHTML = ''
    if (usuarios.lenght == 0) return

    let linhasUsuarios = usuarios.map(usuario =>
        `
<tr>
      <td>${usuario.nome}</td>
      <td>${usuario.sobrenome}</td>
      <td>${usuario.email}</td>
      <td>
      <button class="btn btn-sm btn-warning" data-id="${usuario.id}">Editar</button>
      <button class="btn btn-sm btn-danger" data-id="${usuario.id}">Excluir</button>
      </td>
    </tr>`
    ).join('');

    tableUsuario.innerHTML = linhasUsuarios

}


function salvarUsuarioLocalStorage() {
    localStorage.setItem("cadastro_usuarios", JSON.stringify(usuarios))
}


function editarUsuario() {

}

function excluirUsuario(id) {
    if (confirm("Deseja apagar este usuário?")) {

        console.log("Apagando", id)
        usuarios = usuarios.filter(user => user.id !== id);
        console.log(usuarios)
        salvarUsuarioLocalStorage()
        renderizarUsuarios();
    }
}



inicializar()
