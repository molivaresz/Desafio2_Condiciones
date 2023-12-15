const btnverif = document.getElementById('btnverificar')
const resultado = document.getElementById('respuesta')
const valuestk1 = document.getElementById('stk1')
const valuestk2 = document.getElementById('stk2')
const valuestk3 = document.getElementById('stk3')

// funcion para realizar el calculo
function suma_stickers() {
    let total = Number(valuestk1.value) + Number(valuestk2.value) + Number(valuestk3.value)
    if (total <= 10) {
        resultado.innerHTML = `llevas ${total} stickers`
    }
    else {
        resultado.innerHTML = "Llevas demasiados stickers"
    }
}

// evento y llamada de la funcion
btnverif.addEventListener("click", suma_stickers)

//Se puede cambiar por estos para que se calcule al ingresar valor
/*
valuestk1.addEventListener("input", suma_stickers)
valuestk2.addEventListener("input", suma_stickers)
valuestk3.addEventListener("input", suma_stickers)
*/