/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    
 * 
 * 
 * 
 */

const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
     /*
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
   */


    console.log("Boas vindas ao jogo de BlackJack!")

    
    let carta2 = comprarCarta(); //segunda carta definida
    let cartaComp = comprarCarta(); //primeira carta do computador
    let cartaComp2 = comprarCarta(); //segunda carta do computador


      if(confirm("Quer iniciar uma nova rodada?")) { 
      // o que fazer se o usuário clicar "ok" 

         console.log(`Usuário - cartas: ${carta.texto} ${carta2.texto} - pontuação ${carta.valor + carta2.valor}`)
         console.log(`Computador - cartars: ${cartaComp.texto} ${cartaComp2.texto} - pontuação ${cartaComp.valor + cartaComp2.valor}`)
         if(cartaComp.valor + cartaComp2.valor == 21){
            console.log ("Você perdeu, o computador fez 21.")
         } else{
            if(cartaComp.valor + cartaComp2.valor < carta.valor + carta2.valor){
               console.log("O usuário ganhou!")
            }else if(cartaComp.valor + cartaComp2.valor > carta.valor + carta2.valor ){
               console.log("O computador ganhou!")
            }else {
               console.log("Empate!")
            }
         }
      
      } else { 
      // o que fazer se o usuário clicar "cancelar" 
      console.log("Fim de jogo!")
      }

      





      /*
      //complementando

      if(confirm("Quer iniciar uma nova rodada?")) { 
         
         
            console.log(`Usuário - cartas: ${carta.texto} ${carta2.texto} - pontuação ${carta.valor + carta2.valor}`)
            console.log(`Computador - cartars: ${cartaComp.texto} ${cartaComp2.texto} - pontuação ${cartaComp.valor + cartaComp2.valor}`)
            if(cartaComp.valor + cartaComp2.valor == 21){
               console.log ("Você perdeu, o computador fez 21.")
            } 
            while (confirm("Quer mais uma carta?")){

               }
         
         } 
         */