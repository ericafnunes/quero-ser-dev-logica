 let jogador = 0;
 let ganhador = -1;
 let jogadorPonto = 0;
 let computadorEscolha = 0;
 let computadorPonto =0;

 document.getElementById('mensagens').innerHTML = "";

function jogar(escolha){
   jogadorEscolha = escolha;

   computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

   if(jogadorEscolha == 1 && computadorEscolha == 1 ){
       ganhador = 0;
   } 
   else if (jogadorEscolha == 1 && computadorEscolha == 2){
       ganhador = 2;
   } 
   else if(jogadorEscolha == 1 && computadorEscolha == 3){
       ganhador = 1;

   } 
   else if( jogadorEscolha == 2 && computadorEscolha == 1){
       ganhador = 1;
   }
   else if (jogadorEscolha == 2 && computadorEscolha == 2){
       ganhador = 0;
   }
   else if(jogadorEscolha == 2 && computadorEscolha == 3){
       ganhador = 2;
   }
   else if(jogadorEscolha == 3 && computadorEscolha == 1){
    ganhador = 2;
}
else if(jogadorEscolha == 3 && computadorEscolha == 2){
    ganhador = 1;
}
else if(jogadorEscolha == 3 && computadorEscolha == 3){
    ganhador = 0;
}

    document.getElementById("jogador-escolha-1").classList.remove('selecionado');
    document.getElementById("jogador-escolha-2").classList.remove('selecionado');
    document.getElementById("jogador-escolha-3").classList.remove('selecionado');
    document.getElementById("computador-escolha-1").classList.remove('selecionado');
    document.getElementById("computador-escolha-2").classList.remove('selecionado');
    document.getElementById("computador-escolha-3").classList.remove('selecionado');


    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado');
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado');
   
    if(ganhador == 0){
        document.getElementById('mensagens').innerHTML = "EMPATE"
    }
    if(ganhador == 1){
        document.getElementById('mensagens').innerHTML = "PARABENS, VOCÊ GANHOU!"
        jogadorPonto++;
    }
    if(ganhador == 2){
        document.getElementById('mensagens').innerHTML = "VOCÊ PERDEU CAMARADA!"
        computadorPonto++;
    }
    document.getElementById('jogador-pontos').innerHTML= jogadorPonto;
    document.getElementById('computador-pontos').innerHTML= computadorPonto;
    if(jogadorPonto === 3){
       let ganhou= confirm("VOCE GANHOU!");
       if(ganhou === true){
           location = "index.html";
       }
    }
    if(computadorPonto === 3){
       let alerta = confirm("GAME OVER! TENTAR DE NOVO?");
       if(alerta === true){
           location = "index.html"
       }

    }
}