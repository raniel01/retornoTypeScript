namespace empresa{
    class Pessoa{
        // informações da classe
        private nome: string;
        private cpf: string;
        private idade: number|undefined;

        constructor(nome:string, cpf:string){
            this.cpf = cpf;
            this.nome = nome;
        }

        getCpf():string{
            return this.cpf;
        }
        // altera o valor
        getNome():string|undefined{
            return this.nome;
        }
        // mostra o valor
        setNome(nome:string):void{
            this.nome = nome;
        }

         // altera o valor
        getIdade():number|undefined{
            return this.idade;
        }
        // mostra o valor
        setIdade(idade:number):void{
            this.idade = idade;
        }
    }
}