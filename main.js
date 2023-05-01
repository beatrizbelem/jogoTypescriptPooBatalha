"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem_1 = require("./Personagem");
var prompt_sync_1 = require("prompt-sync");
var sansa = new Personagem_1.Personagem("sansa stark", 100, 40, 20, 20);
// let jonSnow: Personagem = new Personagem("Jon Snow", 20, 30, 50, 60);
var teclado = (0, prompt_sync_1.default)();
var option = 0;
while (option != 9 || sansa.isDead()) {
    console.log("+=============  Personagem ==========+");
    console.log("|1. Treinar ataque                   |");
    console.log("|2. Treinar defesa                   |");
    console.log("|3. Descansar                        |");
    console.log("|4. Entrar em batalha                |");
    console.log("|8. Imprimir atributos               |");
    console.log("|9. Sair                             |");
    console.log("+====================================+");
    option = +teclado("Escolha uma ação: ");
    switch (option) {
        case 1:
            sansa.treinarAtaque();
            sansa.status();
            break;
        case 2:
            sansa.treinarDefesa();
            sansa.status();
            break;
        case 3:
            var horas = +teclado("Digite o número de horas: ");
            sansa.descansar(horas);
            sansa.status();
            break;
        case 4:
            var rest = sansa.entrarEmBatalha();
            console.log("Esta batalha custou ".concat(rest, " de energia"));
            break;
        case 8:
            sansa.status();
            break;
        default:
            console.log("teste");
            break;
    }
}
console.log("sansa :>>", sansa);
