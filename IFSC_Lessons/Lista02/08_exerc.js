

function calcularCompra()
{
    // Obtendo os valores dos campos do formulário
    let nomeProduto = document.getElementById('nomeProduto').value;
    const quantidadeProduto = parseInt(document.getElementById('quantidadeProduto').value);
    const precoUnitario = parseFloat(document.getElementById('precoUnitario').value);
    
    let objParagrafo = document.getElementById("container")

    // Calculando o valor total da compra
    let valorTotal = quantidadeProduto * precoUnitario;
    

    // Fixando o numero de casas decimais
    valorTotal = valorTotal.toFixed(2);

    // Exibindo o resumo da compra
    objParagrafo.setAttribute("class", "mostra")
    objParagrafo.innerHTML = "Resultado da Compra:<br> Nome do Produto: " + nomeProduto + "<br>Valor Total da Compra: R$" + valorTotal;

}
let objBotao = document.getElementById("botao");
objBotao.addEventListener("click", calcularCompra);