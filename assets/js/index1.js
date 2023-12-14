const bordeimg = document.getElementById('borde')
const imagen = document.getElementById('imagen')

function chng_borde() {
    const validaborde = bordeimg.classList.contains('border')
    if (validaborde == false) {
        bordeimg.classList.add('border')
    }
    else {
        bordeimg.classList.remove('border')
    }
}

imagen.addEventListener("click", chng_borde)