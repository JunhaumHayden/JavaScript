function calcularArea()
{
    console.log('----------------teste-------------------');
    let objCaixa = document.getElementById('raio'); //criando o objeto que representa a caixa dentro do javascript
    let raio    = objCaixa.value; //Usando o metodo .value da instancia criada em objCaixa para capturar o valor digitado dentro da caixa no HTML
    //console.log(tempF);
    //let num1     = objCaixa1.value;
    //let num2     = objCaixa2.value;

    // criando um objeto que representa o paragrafo 'container' 
    let objParag = document.getElementById('container');
    let area = Math.PI * Math.pow(raio, 2); //paramentros (base, expoente)
    let objImagem = document.getElementById('myImage').src='icons/pic_bulbon.gif';
    objParag.setAttribute('class', 'mostra');
    

    area = area.toFixed(1);

    //trocar o separador decimal
    area = area.replace('.', ',')

     // insere uma mensagem no paragrafo
     objParag.innerHTML = 'A area do circulo de raio ' + raio + ' é igual a: ' + area + 'cm&sup2'; // & para mostrar caracteres especiais


   
    
}
function esconderParag(objParag)
{
    //objParag.className = '';
    objParag.setAttribute('class', '');
    objImagem = document.getElementById('myImage').src='icons/pic_bulboff.gif';
}
