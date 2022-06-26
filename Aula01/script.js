var jogador01 = -1;
var jogador02 = 1;
var placar;

  jogador01 != -1 && jogador02 != -1 ? 
  console.log('os jogadores sao validos'):
  console.log('jogadores invalidos'); 
   if (jogador01 > 0 && jogador02 == 0) {
    console.log('jogador01 marcou ponto');
    placar = jogador01 > jogador02

    } else if (jogador02 > 0 && jogador01 == 0) {
    console.log('jogador02 marcou ponto');
    placar = jogador01 > jogador02

     } else {
    console.log('ninguem marcou ponto')};

    switch (placar) {
        case placar = jogador01 > jogador02:
            console.log('jogador01 ganhou')
            break;
        case placar = jogador02 > jogador01:
            console.log('joagador02 ganhou')
    break;
        default:
            console.log('ninguem ganhou')
            break;
    }