
function calcularMedia()
{
    // Criando os objetos em JavaScript
    let objNomeAluno = document.getElementById("Aluno");
    let objNota1 = document.getElementById("Nota1");
    let objNota2 = document.getElementById("Nota2");
    let objNota3 = document.getElementById("Nota3");
    let objParagrafo = document.getElementById("container")

    let aluno = objNomeAluno.value;
    // Atribuindo a variavel um valor numerico
    let Nota1 = parseFloat(objNota1.value);
    let Nota2 = parseFloat(objNota2.value);
    let Nota3 = parseFloat(objNota3.value);

    let media = (Nota1 + Nota2 + Nota3) / 3

    // Fixando o numero de casas decimais
    media = media.toFixed(1);

    objParagrafo.setAttribute("class", "mostra")
    objParagrafo.innerHTML = "Resultado da média:<br> Nome do Aluno: " + aluno + "<br>Nota1: " + Nota1 + "<br>Nota2: " + Nota2 + "<br>Nota3: " + Nota3 + "<br>Obtendo a Media: " + media;

}
let objBotao = document.getElementById("botao");
objBotao.addEventListener("click", calcularMedia);