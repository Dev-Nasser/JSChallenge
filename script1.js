function mostrar(){

    let idade = document.getElementById("Idade").value
    let nome = document.getElementById("nome").value
    let  linguagem = document.getElementById("linguagem").value

    alert(`Olá vejo que o seu nome e ${nome}, sua idade é de ${idade} anos e ja esta aprendendo ${linguagem}!`);
    if (idade > 18){
        alert ('Sua verificacao de idade nos mostra que você já é maior de 18');
     
    }


}


