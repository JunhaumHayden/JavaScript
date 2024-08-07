// usando o evento addEventListener como funçao anonima
function esconderParag(objParag)
{
    objParag.className = '';
}


let objParag = document.getElementById("container");
let mensagem;

let objBotao = document.getElementById('botao');
objBotao.addEventListener('click', function()
{
    let objNome01 = document.getElementById('nome01');
    let objNome02 = document.getElementById('nome02');
    

    let nome01 = objNome01.value;
    let nome02 = objNome02.value;

    //.charAt metodo para recuperar a posicao da string passada no argumento
    let letraInicialNome01 = nome01.charAt(0);
    let letraInicialNome02 = nome02.charAt(0);

    if(letraInicialNome01 == letraInicialNome02)
    {
        mensagem = 'Mesma letra inicial: ' + letraInicialNome01
    }
    else
    {
        mensagem = 'Letra inicial diferente: <br> O primeiro nome tem letra' + letraInicialNome01 + ' e o segundo nome tem letra inicial' + letraInicialNome02;
    }

})

objParag.setAttribute('class', 'mostra')
objParag.innerHTML = mensagem