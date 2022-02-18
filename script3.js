function nometamanho(){
    let nome = document.getElementById("nomeusuario").value 
    let letras = nome.length;
    let palavras= nome.split(' ').length;



    alert(`A sua frase tem ${letras} letras e  ${palavras} palavras`)


}
