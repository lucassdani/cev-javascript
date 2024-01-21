function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'impossivel conta!'
        alert('[ERRO] faltam dados')
    }else {
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('passo inválido considerando passo 1')
            p = 1
        }

        if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉 `
            }
        }else {
            // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉 `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
        
}