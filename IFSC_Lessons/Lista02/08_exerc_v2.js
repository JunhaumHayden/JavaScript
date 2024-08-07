function calcularCompra() {
    // Obtendo os valores dos campos do formulário
    const nomeProduto = document.getElementById('nomeProduto').value;
    const quantidadeProduto = parseInt(document.getElementById('quantidadeProduto').value);
    const precoUnitario = parseFloat(document.getElementById('precoUnitario').value);

    // Calculando o valor total da compra
    const valorTotal = quantidadeProduto * precoUnitario;

    // Exibindo o resumo da compra
    const resumoCompra = `
        Nome do Produto: ${nomeProduto}<br>
        Valor Total da Compra: R$ ${valorTotal.toFixed(2)}
    `;
    document.getElementById('resumoCompra').innerHTML = resumoCompra;
}
