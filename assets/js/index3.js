const btning = document.getElementById('btningresar')
const resultado = document.getElementById('respuesta')
const select1 = document.getElementById('lista1')
const select2 = document.getElementById('lista2')
const select3 = document.getElementById('lista3')

// funcion para validar clave
function validatepassw() {
    const passw = select1.value + select2.value + select3.value
    if (passw === '911') {
        resultado.innerHTML = "Password 1 correcto"
    }
    else if (passw === '714') {
        resultado.innerHTML = "Password 2 correcto"
    }
    else {
        resultado.innerHTML = "Password incorrecto"
    }
}

// evento y llamada de la funcion
btning.addEventListener("click", validatepassw)
