"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    Personagem.prototype.status = function () {
        console.log("Guerreiro");
        console.log("Nome: ", this.nome);
        console.log("Energia: ", this.energia.toFixed(1));
        console.log("Ataque: ", this.ataque.toFixed(1));
        console.log("Defesa: ", this.defesa.toFixed(1));
    };
    Personagem.prototype.treinarAtaque = function () {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        this.isDead();
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem.prototype.treinarDefesa = function () {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        this.isDead();
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem.prototype.descansar = function (tempo) {
        this.energia += tempo * Math.random() * 10;
        if (this.energia > 100) {
            this.energia = 100;
        }
    };
    Personagem.prototype.entrarEmBatalha = function () {
        var desgaste = Math.random() * 100;
        this.energia -= desgaste;
        return this.energia;
    };
    Personagem.prototype.isDead = function () {
        if (this.energia <= 0) {
            console.log("Ops, você morreu!");
            return true;
        }
        else {
            return false;
        }
        // return this.energia <= 0 ? true : false  
    };
    return Personagem;
}());
exports.Personagem = Personagem;
