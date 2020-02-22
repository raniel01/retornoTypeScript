namespace empresa{
    class Empresa{
        private nomeEmpresa : string;
        private atividade : string;
        private cidade : string;
        private clientes : Array<Cliente> = [];
        private funcionarios : Array<Funcionario> = [];

        getNomeEmpresa():string{
            return this.nomeEmpresa;
        }
        setNomeEmpresa(nome:string):void{
            this.nomeEmpresa = nome;
        }
        getAtividade():string{
            return this.atividade;
        }
        setAtividade(atividade:string):void{
            this.atividade = atividade;
        }
        getCidade():string{
            return this.cidade;
        }
        setCidade(cidade:string):void{
            this.cidade = cidade;
        }
        addCliente(cliente:Cliente):void{
            this.clientes.push(cliente);
        }
        getCliente(){
            return this.clientes;
        }
        addFuncionario(funcionario:Funcionario):void{
            this.funcionarios.push(funcionario);
        }
        getFuncionario(){
            return this.funcionarios;
        }
    }
}