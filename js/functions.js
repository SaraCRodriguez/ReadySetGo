// document.addEventListener('DOMContentLoaded', function (event) { 
// Esto se usa si ponemos script antes del body, si lo ponemos antes del cierre del body, esto no se pone por regla general

document.querySelector('.btnJugar').addEventListener('click', function () {
    document.querySelector('.presentacion').classList.add('hide');
    document.querySelector('#info').classList.remove('hide');
    document.querySelector('.btnJugar').classList.add('hide');
    document.querySelector('.imgJuego').classList.remove('hide');
    restaCuentaAtras();
});

var tiempoMax = 3;
function restaCuentaAtras() {
    document.querySelector('.cuentaAtras').innerHTML = tiempoMax; // innerHTML inserta texto a cualquier elemento HTML, borrando lo que había antes
    if (tiempoMax != 0) {
        tiempoMax -= 1; // Esto es igual a tiempoMax = tiempoMax - 1;
        setTimeout("restaCuentaAtras()", 1000);
    } else {
        document.querySelector('.cuentaAtras').classList.add('hide');
        seleccionFigura();
    }
}

var figura;
function seleccionFigura() {
    figura = Math.floor(Math.random() * 5 + 1);

    switch (figura) {
        case 1:
            document.querySelector('#info').innerHTML = "Rock";
            document.querySelector('.imgJuego').style.backgroundImage = "url(./img/piedra.svg)";
            break;
        case 2:
            document.querySelector('#info').innerHTML = "Paper";
            document.querySelector('.imgJuego').style.backgroundImage = "url(./img/papel.svg)";
            break;
        case 3:
            document.querySelector('#info').innerHTML = "Scissors";
            document.querySelector('.imgJuego').style.backgroundImage = "url(./img/tijeras.svg)";
            break;
        case 4:
            document.querySelector('#info').innerHTML = "Lizzard";
            document.querySelector('.imgJuego').style.backgroundImage = "url(./img/lagarto.svg)";
            break;
        case 5:
            document.querySelector('#info').innerHTML = "Spock";
            document.querySelector('.imgJuego').style.backgroundImage = "url(./img/spock.svg)";
            break;
    }

    setTimeout('reset()', 2000);
}

function reset() {
    document.querySelector('#info').innerHTML = "Preparado ...";
    document.querySelector('.imgJuego').style.backgroundImage = "none";
    document.querySelector('.cuentaAtras').classList.remove('hide');
    tiempoMax = 3;
    restaCuentaAtras();
}
// });