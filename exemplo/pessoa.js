"use strict";
var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa(nome, cpf) {
            this.cpf = cpf;
            this.nome = nome;
        }
        Pessoa.prototype.getCpf = function () {
            return this.cpf;
        };
        // altera o valor
        Pessoa.prototype.getNome = function () {
            return this.nome;
        };
        // mostra o valor
        Pessoa.prototype.setNome = function (nome) {
            this.nome = nome;
        };
        // altera o valor
        Pessoa.prototype.getIdade = function () {
            return this.idade;
        };
        // mostra o valor
        Pessoa.prototype.setIdade = function (idade) {
            this.idade = idade;
        };
        return Pessoa;
    }());
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
