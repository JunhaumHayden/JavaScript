function tratartriangulo()
{
    //alert('Metodo Funcional!!!! ')
    let objHipotenusa = document.getElementById('hipotenusa');
    let objCateto     = document.getElementById('cateto');
    let objAltura     = document.getElementById('altura');

    let hipotenusa = objHipotenusa.value;
    let cateto     = objCateto.value;
    let altura     = objAltura.value;


    let area;
    let mensagem;
    let objParag = document.getElementById("container");
    let image = document.getElementById('myImage');

    //calcular area
    area = (cateto * altura)/2;
    console.log(area);

    //testar triangulo isosceles
    if (hipotenusa == cateto || hipotenusa==altura || cateto == altura)
    {
        mensagem = 'Sim, é isosceles';
        image.src='../icons/pic_bulbon.gif';
    }
    else
    {
        mensagem = 'Não, não é isosceles';
        image.src='../icons/pic_bulboff.gif';
    }
    
    //mostrar o paragrafo
    objParag.setAttribute('class', 'mostra') //atributo, parametro
    objParag.innerHTML = 'A area do tringulo é: ' + area + '<br>' + mensagem

}

//associando o botao html a um objeto no JS
// a vinculacao é feita pelo id marcado no HTML
let objBotao = document.getElementById('botao');

//associar o metodo addEventListener() ao objeto botao
// estacia-se o objeto html e associa um evento.
objBotao = addEventListener('click', tratartriangulo) //nome do evento, manipulador do evento