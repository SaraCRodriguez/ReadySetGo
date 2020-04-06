
var btnJugar = document.querySelector('.btnJugar');
var presentacion = document.querySelector('.presentacion');
var info = document.querySelector('#info');
var imgJuego = document.querySelector('.imgJuego');
var cuentaAtras = document.querySelector('.cuentaAtras');

btnJugar.addEventListener('click', function () {
    presentacion.classList.add('hide');
    info.classList.remove('hide');
    btnJugar.classList.add('hide');
    imgJuego.classList.remove('hide');
    restaCuentaAtras();
});

var tiempoMax = 3;
function restaCuentaAtras() {
    cuentaAtras.innerHTML = tiempoMax;
    if (tiempoMax != 0) {
        tiempoMax -= 1;
        cuentaAtras.classList.add('showCuentaAtras');
        setTimeout("restaCuentaAtras()", 1000);
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
            break;
        case 2:
            info.innerHTML = "Paper";
            imgJuego.style.backgroundImage = "url(./img/papel.svg)";
            break;
        case 3:
            info.innerHTML = "Scissors";
            imgJuego.style.backgroundImage = "url(./img/tijeras.svg)";
            break;
        case 4:
            info.innerHTML = "Lizzard";
            imgJuego.style.backgroundImage = "url(./img/lagarto.svg)";
            break;
        case 5:
            info.innerHTML = "Spock";
            imgJuego.style.backgroundImage = "url(./img/spock.svg)";
            break;
    }

    setTimeout('reset()', 2000);
}

function reset() {
    info.innerHTML = "Preparado ...";
    imgJuego.style.backgroundImage = "none";
    cuentaAtras.classList.remove('hide');
    tiempoMax = 3;
    restaCuentaAtras();
}