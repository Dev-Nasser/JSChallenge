
function trocar(){
    var name = document.querySelector('input#nomeUsuario')
    var numero = document.getElementById('numero')
    var cinc = 0
    var dez = 0
    var vint = 0
    
        var valor = numero.value
        var nome = name.value
        
        while (valor > 0) {
            if (valor % 20 === 0){
                vint = vint + 1
                       valor -= 20
           } 
           
           else if (valor % 10 === 0){
                dez = dez + 1
                valor -= 10
            }  
            else if (valor % 5 === 0) {
                cinc = cinc + 1
                valor -= 5
            } 
        }
    
        alert(`Ola ${nome} voce vai ter, ${cinc} notas de cinco, ${vint} notas de vinte, ${dez} notas de dez.`)
    }        
    
    
    
    