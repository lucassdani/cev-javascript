function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ) {
        alert('[ERRO] verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/crianca-m.png')

            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-m.png')

            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/crianca-f.png')

            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-f.png')

            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulta.png')
            }else {
                //idoso
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}