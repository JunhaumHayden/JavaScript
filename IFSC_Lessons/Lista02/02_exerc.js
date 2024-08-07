function converterTemp()
{
    let objTemp = document.getElementById('tempF');
    let objParag = document.getElementById('container');

    let tempF = objTemp.value;
    let tempC = (5/9)*(tempF - 32);

    tempC = tempC.toFixed(1)

    objParag.setAttribute('class', 'mostra');
    objParag.innerHTML = 'dados da conversao termometrica: <br> Temperatura em F = ' + tempF + 'F <br> Temperatura em C= '+ tempC+ 'C';
}

function esconderParag(objParag)
{
    objParag.className = '';
}

let objBotao = document.getElementById('botao');

objBotao.addEventListener('click', converterTemp);
