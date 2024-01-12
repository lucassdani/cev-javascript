function verificar() {
  var pais = document.querySelector("input#nome");
  var res = document.querySelector("div#res");
    res.innerHTML = `<p>você esta vivendo em(no) ${pais}</p>`
  if (pais === "brasil") {
    res.innerHTML += "<p>você é brasileiro</p>";
  } else {
    res.innerHTML += "<p>você é estrangeiro</p>";
  }
}

/*var pais = 'eua'
console.log(`vivendo em ${pais}`)
if (pais === 'brasil') {
    console.log('brasileiro')
}else {
    console.log('estrangeiro')
}*/
