function juntarTexto() 
{
    //acessando os dois paragrafos da pagina web
    let objparagrafo01 = document.getElementById('idparagrafo01');
    let objparagrafo02 = document.getElementById('idparagrafo02');
    let objDiv = document.getElementById('container');

    //guardando o texto de cada paragrafo dentro de uma variavel JS

    let textoParagrafo01 = objparagrafo01.innerHTML; //innerHTML traz da pagina e coloca na variavel
    let textoParagrafo02 = objparagrafo02.innerHTML;
    let textoUnido       = textoParagrafo01 + '<br>' + textoParagrafo02

    //tornar a dic visivel
    objDiv.style.display = 'block';

    objDiv.innerHTML = '<ul> <li>' + textoUnido + '</li> <li>' + textoParagrafo01 + '</li> </ul>';

    //inserindo texto dentro da div
    //objDiv.innerHTML = textoUnido;

}