function cont() {
    var inictxt = document.getElementById("txtinicio")
    var fimtxt = document.getElementById("txtfim")
    var passotxt = document.getElementById("txtpasso")
    var res = document.getElementById('res')

    if (inictxt.value.length == 0 || fimtxt.value.length == 0 || passotxt.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML= 'Contando... </br>'
        var inic = Number(inictxt.value)
        var fim = Number(fimtxt.value)
        var passo = Number(passotxt.value)
        if (passo <= 0) {
            alert("Passo inválido! Considerando PASSO 1")
        }
        if (inic < fim) {
            //contagem crescente
            for (var c = inic; c <= fim; c += passo ) { 
                res.innerHTML += `\u{1F449} ${c}`
            }
        } else {
            //contagem regressiva
            for(var c = inic; c >= fim; c -= passo) {
                res.innerHTML += `\u{1F449} ${c}`
            } 
        }
        res.innerHTML +=  ` \u{1F44D}` 
    }
}