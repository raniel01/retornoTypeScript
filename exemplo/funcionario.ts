namespace empresa{
    export class Funcionario extends Pessoa{
        private codFuncionario : number;
        private valorDia : number;

        getCotFuncionario():number{
            return this.codFuncionario;
        }
        setCodFuncionario(codFuncionario:number):void{
            this.codFuncionario = codFuncionario;
        }

        getValorDia():number{
            return this.valorDia;
        }
        setValorDia(valorDia:number):void{
            this.valorDia = valorDia;
        }

        calcularSalario() : number{
            return this.valorDia*30;
        }
    }

}