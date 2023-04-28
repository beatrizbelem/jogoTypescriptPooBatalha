import { Personagem } from "./Personagem";
import prompt from "prompt-sync"


let sansa: Personagem  = new Personagem("sansa stark", 100, 40, 20, 20);

let teclado = prompt();
let option: number = 0;

while (option != 9 || sansa.isDead()){
  console.log("+=============  Personagem ==========+");
  console.log("|1. treinar ataque                   |");
  console.log("|2. Treinar defesa                   |");
  console.log("|3. Descansar                        |");
  console.log("|4. Entrar em batalha                |");
  console.log("|8. Imprimir atributos               |");
  console.log("|9. Sair                             |");
  console.log("+====================================+");

  option = +teclado("Escolha uma ação: ");

    switch(option) {
      case 1: 
        sansa.treinarAtaque();
        sansa.status();
        break;
      case 2: 
               sansa.treinarDefesa();
               sansa.status();
              break;
      case 3:
        let horas: number =  +teclado("Digite o número de horas: ");
                 sansa.descansar(horas);
                 sansa.status();
              break;
      case 4:
        let rest: number = sansa.entrarEmBatalha();
           console.log(`Esta batalha custou ${rest} de energia`)
            break;

      case 8: 
      sansa.status();

        break;
      default:
        break;
    }

}

console.log("sansa :>>", sansa);
