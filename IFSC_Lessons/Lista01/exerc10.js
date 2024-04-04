function mudarTema()
{
    let objLink = document.getElementById('trocaCSS');
    //objLink.href = 'exerc10_mod.css';
 
    if (objLink) 
    {
        let temaAtual = objLink.getAttribute("href");
        
        if (temaAtual === 'exerc10_.css') {
            objLink.setAttribute('href', 'exerc10_mod.css');
        } else {
            objLink.setAttribute('href', 'exerc10_orig.css');
        }
    } else {
        console.error("Elemento com ID 'trocaCSS' não encontrado.");
    }
    
    
}