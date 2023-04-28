"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    status() {
        console.log("Guerreiro");
        console.log("Nome: ", this.nome);
        console.log("Energia: ", this.energia.toFixed(1));
        console.log("Ataque: ", this.ataque.toFixed(1));
        console.log("Defesa: ", this.defesa.toFixed(1));
    }
    treinarAtaque() {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        if (this.energia < 0) {
            console.log("Ops, você morreu!");
        }
        this.status();
    }
    treinarDefesa() {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        this.isDead();
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    descansar() {
        this.energia += Math.random() * 10;
        if (this.energia > 100) {
            this.energia = 100;
        }
    }
    entrarEmBatalha() {
        let desgaste = Math.random() * 100;
        this.energia -= desgaste;
        return this.energia;
    }
    isDead() {
        if (this.energia < 0) {
            console.log("Ops, você morreu!");
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Personagem = Personagem;
