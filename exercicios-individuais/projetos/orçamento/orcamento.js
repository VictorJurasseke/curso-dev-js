
const PRECO_POR_PAGINA = 500;
const PRECO_DESIGN_ADICIONAL = 1000


document.querySelector(".seu-nome").textContent = "Victor"


// VALORES DOS INPUTS
const inputPaginas = document.querySelector("#qtd-paginas") // QUANTIDADE DE PÁGINAS INSERIDAS PELO CLIENTE -> $500
const inputPrazo = document.querySelector("#prazo-entrega")
const inputDesconto = document.querySelector("#desconto"); // DESCONTO
const inputMensalidade = document.querySelector("#mensalidade")
const checkBoxDesign = document.querySelector("#inclui-design") // PRAZO DE URGÊNCIA


// EXIBIÇÃO
const resumoSubTotal = document.querySelector("#resumo-subtotal")
const resumoAdicional = document.querySelector("#resumo-adicional")
const resumoUrgencia = document.querySelector("#resumo-urgencia")
const resumoDesconto = document.querySelector("#resumo-desconto")
const resumoTotal = document.querySelector("#resumo-total")
const resumoMensalidade = document.querySelector("#resumo-mensalidade")

// FORMULÁRIO
const form = document.querySelector("#form")
form.addEventListener("input", () => atualizarOrcamento())

const calcularSubTotal = (quantidade) => quantidade * PRECO_POR_PAGINA

const calcularValorDesconto = (valor, porcentagem) => (valor / 100) * porcentagem

function calcularTaxaDeUrgencia(valor, prazo) {
    if (prazo > 0 && prazo < 5) {
        return valor * 0.1 // 10%
    } else if (prazo >= 5 && prazo < 15) {
        // SE MENOR QUE 5
        return valor * 0.05
    } else {
        return 0
        // SE CHEGOU AQUI SIGNIFICA QUE É MAIOR QUE 5 E MENOR QUE 15
    }
}


function atualizarOrcamento() {

    const qtdPagina = Number(inputPaginas.value);
    const porcentagemDesconto = Number(inputDesconto.value);
    const prazo = Number(inputPrazo.value);
    const designIncluido = checkBoxDesign.checked


    const subtotal = calcularSubTotal(qtdPagina)

    const adicionalDesign = designIncluido ? PRECO_DESIGN_ADICIONAL : 0

    const taxaUrgencia = calcularTaxaDeUrgencia(subtotal + adicionalDesign, prazo)


    const valorDesconto = calcularValorDesconto(subtotal + adicionalDesign + taxaUrgencia, porcentagemDesconto)


    const total = (subtotal + adicionalDesign + taxaUrgencia) - valorDesconto


    const formatarValor = valor => valor.toLocaleString('pt-BR',
        {
            style: "currency",
            currency: "BRL"
        }
    )

    resumoSubTotal.textContent = formatarValor(subtotal)
    resumoAdicional.textContent = formatarValor(adicionalDesign)
    resumoUrgencia.textContent = formatarValor(taxaUrgencia)
    resumoDesconto.textContent = formatarValor(valorDesconto)
    resumoTotal.textContent = formatarValor(total)

    resumoMensalidade.textContent = Number(inputMensalidade.value)
}


document.addEventListener("DOMContentLoaded", atualizarOrcamento())








