
var btnJugar = document.querySelector('.btnJugar');
var presentacion = document.querySelector('.presentacion');
var info = document.querySelector('#info');
var imgJuego = document.querySelector('.imgJuego');
var cuentaAtras = document.querySelector('.cuentaAtras');
var btnEleccion = document.querySelector('.btnEleccion');

btnJugar.addEventListener('click', function () {
    presentacion.classList.add('hide');
    info.classList.remove('hide');
    btnJugar.classList.add('hide');
    imgJuego.classList.remove('hide');
    btnEleccion.classList.remove('hide');
    restaCuentaAtras();
});

var tiempoMax = 5;
function restaCuentaAtras() {
    cuentaAtras.innerHTML = tiempoMax;
    if (tiempoMax != 0) {
        tiempoMax -= 1;

        setTimeout("restaCuentaAtras()", 1200);

        switch (tiempoMax) {
            case 4:
                info.innerHTML = "Prepare yourseeelf ...";
                break;
            case 3:
                info.innerHTML = "Time's passing ...";
                break;
            case 2:
                info.innerHTML = "Ok .. Ready ...";
                break;
            case 1:
                info.innerHTML = "Set ...";
                break;
            case 0:
                info.innerHTML = "GO!";
                break;
        }

        cuentaAtras.classList.add('showCuentaAtras');

    } else {
        cuentaAtras.classList.add('hide');
        seleccionFigura();
    }
}

var figura;
function seleccionFigura() {
    figura = Math.floor(Math.random() * 5 + 1);

    switch (figura) {
        case 1:
            info.innerHTML = "Rock";
            imgJuego.style.backgroundImage = "url(./img/piedra.svg)";
            imgJuego.style.backgroundSize = "60%";
            break;
        case 2:
            info.innerHTML = "Paper";
            imgJuego.style.backgroundImage = "url(./img/papel.svg)";
            imgJuego.style.backgroundSize = "60%";
            break;
        case 3:
            info.innerHTML = "Scissors";
            imgJuego.style.backgroundImage = "url(./img/tijeras.svg)";
            imgJuego.style.backgroundSize = "60%";
            break;
        case 4:
            info.innerHTML = "Lizzard";
            imgJuego.style.backgroundImage = "url(./img/lagarto.svg)";
            imgJuego.style.backgroundSize = "60%";
            break;
        case 5:
            info.innerHTML = "Spock";
            imgJuego.style.backgroundImage = "url(./img/spock.svg)";
            imgJuego.style.backgroundSize = "60%";
            break;
    }

    setTimeout('reset()', 5000);
}

function reset() {
    info.innerHTML = "Ready ...";
    imgJuego.style.backgroundImage = "none";
    cuentaAtras.classList.remove('hide');
    tiempoMax = 5;
    restaCuentaAtras();
}