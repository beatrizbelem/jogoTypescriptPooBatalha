"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let sansa = new Personagem_1.Personagem("sansa stark", 100, 40, 20, 20);
let teclado = (0, prompt_sync_1.default)();
let option = 0;
while (option != 9 || sansa.isDead()) {
    console.log("+=============  Personagem ==========+");
    console.log("|1. treinar ataque                   |");
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
            sansa.descansar();
            sansa.status();
            break;
        case 4:
            let rest = sansa.entrarEmBatalha();
            console.log(`Esta batalha custou ${rest} de energia`);
            break;
        case 8:
            sansa.status();
            break;
        default:
            break;
    }
}
console.log("sansa :>>", sansa);
