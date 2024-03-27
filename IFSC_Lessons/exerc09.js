function converteTemp()
{
    let objCaixa = document.getElementById('tempF'); //criando o objeto que representa a caixa dentro do javascript
    let tempF    = objCaixa.value; //Usando o metodo .value da instancia criada em objCaixa para capturar o valor digitado dentro da caixa no HTML
    //console.log(tempF);
    //let num1     = objCaixa1.value;
    //let num2     = objCaixa2.value;

    // criando um objeto que representa o paragrafo 'container' 
    let objParag = document.getElementById('container');
    console.log(tempF);
    mumero = parseFloat(tempF);
    console.log(numero);


    if(isNaN(numero))
    {
        objParag.innerHTML = 'Um ou mais valores nao sao numeros';
        objParag.className = 'naoNumero';
    } 
    else
    {
        let tempC  = (5/9) * (tempF - 32);
         // insere uma mensagem no paragrafo
        objParag.innerHTML = 'Resultado da conversão: <br> Temperatura em F: ' + tempF + '<br> Temperatura convertida para C = ' + tempC;
        // para mostar o paragrafo oculto
        objParag.className = 'mostra';
    }
    
}
function esconderParag(objParag)
{
    objParag.className = '';
}
