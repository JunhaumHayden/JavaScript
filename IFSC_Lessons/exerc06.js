function inserirTexto() 
{
    //corpo da funçao
    //criar, usando o DOM, dois objetos que representam o paragrafo e o cabeçalho na pagina web

    let objCabec = document.getElementById('idcabelho');
    let objParag = document.getElementById('idparagrafo');
    //acessar o conteudo de texto dos dois objetos na pagina web
    let textoCabec = objCabec.innerHTML;
    let textoParag = objParag.innerHTML;
    //adicionar algum texto ao  conteudo das variaveis nas linhas 9 e 10
    textoCabec = textoCabec + 'Adicionando texto ao cabeçalho';
    textoParag = textoParag + 'adicionando texto ao paragrafo'
    //Sobrescrevendo o conteudo do H1 e P do HTML com JavaScript
    objCabec.innerHTML = textoCabec;
    objParag.innerHTML = textoParag;
}