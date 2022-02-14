function nometamanho(){
    const nome = document.getElementById("nomeusuario").value 
    let esp = nome.match(" ").length
    let letras = nome.length - esp
    alert(`A sua frase tem ${letras} letras e ${esp + 1} palavras`)


}
