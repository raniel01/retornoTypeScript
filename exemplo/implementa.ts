namespace empresa{
    let p = new Pessoa("Paulo Felix", "000.000.000-0"); 
    p.setIdade(30);

    document.getElementById("nome").textContent = p.getNome();
    document.getElementById("cpf").textContent = p.getCpf();
    document.getElementById("idade").textContent = p.getIdade();
} 