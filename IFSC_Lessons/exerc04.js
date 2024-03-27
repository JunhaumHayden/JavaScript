let objParagrafo = document.getElementById('parag1');
let textoDoparagrafoOriginal = objParagrafo.innerHTML;

//alert(textoDoparagrafo);

let novoTextodoParagrafo = textoDoparagrafoOriginal + " \nEste texto é dimanico, gerado automaticamente pelo JavaScript.";

//alterando o texto do paragrafo na pagina web
objParagrafo.innerHTML = novoTextodoParagrafo;
