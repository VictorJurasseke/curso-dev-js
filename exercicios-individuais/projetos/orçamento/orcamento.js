{/* <div class="text-center">
                    <h3>Resumo do Orçamento</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Subtotal (Páginas):</span>
                            <span id="resumo-subtotal">R$ 0,00</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Adicional de Design:</span>
                            <span id="resumo-adicional">R$ 0,00</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between text-warning">
                            <span>Taxa de Urgência:</span>
                            <span id="resumo-urgencia">+ R$ 0,00</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between text-danger">
                            <span>Desconto Aplicado:</span>
                            <span id="resumo-desconto">- R$ 0,00</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between fs-4 fw-bold border-top pt-3">
                            <span>TOTAL:</span>
                            <span id="resumo-total">R$ 0,00</span>
                        </li>
                    </ul>
                </div> */}
//     Taxa de Urgência:
//     - Se o prazo for menor que 5 dias: 10 % sobre o valor base(páginas + design).
//    - Se o prazo for menor que 15 dias: 5 % sobre o valor base(páginas + design). 
//    - Se for 15 dias ou mais, a taxa é zero.


const PRECO_POR_PAGINA = 500;
const PRECO_DESIGN_ADICIONAL = 1000

document.querySelector(".seu-nome").textContent = "Victor"
const inputPaginas = document.querySelector("#qtd-paginas") // QUANTIDADE DE PÁGINAS INSERIDAS PELO CLIENTE -> $500
const inputPrazo = document.querySelector("#prazo-entrega")
const inputDesconto = document.querySelector("#desconto"); // DESCONTO
const checkBoxDesign = document.querySelector("#inclui-design") // PRAZO DE URGÊNCIA
const resumoSubTotal = document.querySelector("#resumo-subtotal")
const resumoAdicional = document.querySelector("#resumo-adicional")
const resumoUrgencia = document.querySelector("#resumo-urgencia")
const resumoDesconto = document.querySelector("#resumo-desconto")
const resumoTotal = document.querySelector("#resumo-total")

// FORMULÁRIO DE INPUT
const form = document.querySelector("#form")
form.addEventListener("input", () => { console.log("Altrado") })


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
    const porcentagemDesconto = Nmber(inputDesconto.value);
    const prazo = Number(inputPrazo.value);
    const designIncluido = checkBoxDesign.checked

    const subtotal = calcularSubTotal(qtdPagina)

    const adicionalDesign = designIncluido ? PRECO_DESIGN_ADICIONAL : 0

    // const calcularValorDesconto = (subtotal, porcentagemDesconto)


}







