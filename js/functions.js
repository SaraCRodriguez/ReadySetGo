const btnJugar = document.querySelector('.btnJugar');
const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
const btnLizard = document.querySelector('.btnLizard');
const btnSpock = document.querySelector('.btnSpock');

const presentacion = document.querySelector('.presentacion');
const info = document.querySelector('#info');
const imgJuego = document.querySelector('.imgJuego');
const cuentaAtras = document.querySelector('.cuentaAtras');
const btnEleccion = document.querySelector('.btnEleccion');

btnJugar.addEventListener('click', function () {
    presentacion.classList.add('hide');
    info.classList.remove('hide');
    btnJugar.classList.add('hide');
    imgJuego.classList.remove('hide');
    btnEleccion.classList.remove('hide');
    restaCuentaAtras();
});

btnRock.addEventListener('click', function () { cambiarJugada(1); });
btnPaper.addEventListener('click', function () { cambiarJugada(2); });
btnScissors.addEventListener('click', function () { cambiarJugada(3); });
btnLizard.addEventListener('click', function () { cambiarJugada(4); });
btnSpock.addEventListener('click', function () { cambiarJugada(5); });

var puntosYo = 0;
var puntosPC = 0;
var jugadaYo = 1;
function cambiarJugada(jugadaNueva) {
    jugadaYo = jugadaNueva;
}

var tiempoMax = 5;
function restaCuentaAtras() {
    cuentaAtras.innerHTML = tiempoMax;
    if (tiempoMax != 0) {
        tiempoMax -= 1;

        switch (tiempoMax) {
            case 4:
                info.innerHTML = "Prepare yourseeelf ...";
                info.style.color = "#BF331D";
                cuentaAtras.style.color = "#111";
                break;
            case 3:
                info.innerHTML = "Time's passing ...";
                info.style.color = "#111";
                cuentaAtras.style.color = "#BF331D";
                break;
            case 2:
                info.innerHTML = "Ok .. Ready ...";
                info.style.color = "#BF331D";
                cuentaAtras.style.color = "#111";

                break;
            case 1:
                info.innerHTML = "Set ...";
                info.style.color = "#111";
                cuentaAtras.style.color = "#BF331D";
                break;
            case 0:
                info.innerHTML = "GO!";
                info.style.color = "#BF331D";
                cuentaAtras.style.color = "#111";
                break;
        }

        cuentaAtras.classList.remove('hide');
        cuentaAtras.classList.add('showCuentaAtras');

        setTimeout("resetAnimacion()", 1000);

    } else {
        cuentaAtras.classList.add('hide');
        seleccionFigura();
    }

}

function resetAnimacion() {
    cuentaAtras.classList.add('hide');
    setTimeout("restaCuentaAtras()", 200);
}


var jugadaPC;
function seleccionFigura() {
    jugadaPC = Math.floor(Math.random() * 5 + 1);
    ganador = quienGana(jugadaYo, jugadaPC);

    switch (jugadaPC) {
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
    puntuar(ganador);

    setTimeout('reset()', 2200);
}

function reset() {
    info.innerHTML = "Ready ...";
    imgJuego.style.backgroundImage = "none";
    imgJuego.style.backgroundSize = '0%';
    cuentaAtras.classList.remove('hide');
    document.querySelector('.youLose').classList.add('hide');
    document.querySelector('.draw').classList.add('hide');
    document.querySelector('.youWin').classList.add('hide');
    tiempoMax = 5;
    restaCuentaAtras();
}

function puntuar(ganador) {
    var miScore = document.querySelector('#miScore');
    var PCScore = document.querySelector('#PCScore');

    if (ganador == 1) {
        puntosYo = puntosYo + 1;
        miScore.innerHTML = puntosYo;
        document.querySelector('.youWin').classList.remove('hide');
    }
    else if (ganador == -1) {
        puntosPC = puntosPC + 1
        PCScore.innerHTML = puntosPC;
        document.querySelector('.youLose').classList.remove('hide');
    }
    else {
        document.querySelector('.draw').classList.remove('hide');
    }

}

function quienGana(jugadaYo, jugadaPC) {
    // 1 piedra, 2  papel, 3 tijeras, 4 lagarto, 5 spock
    resultado = -1;
    if (jugadaYo == jugadaPC) {
        resultado = 0;
    }
    else if (jugadaYo) {
        switch (jugadaYo) {
            case 1:
                if (jugadaPC == 3 || jugadaPC == 4) {
                    resultado = 1;
                }
                break;
            case 2:
                if (jugadaPC == 1 || jugadaPC == 5) {
                    resultado = 1;
                }
                break;
            case 3:
                if (jugadaPC == 2 || jugadaPC == 4) {
                    resultado = 1;
                }
                break;
            case 4:
                if (jugadaPC == 2 || jugadaPC == 5) {
                    resultado = 1;
                }
                break;
            case 5:
                if (jugadaPC == 1 || jugadaPC == 3) {
                    resultado = 1;
                }
                break;
        }
    }
    return resultado;
}

function traducir(jugada) {
    var traduccion = "";
    switch (jugada) {
        case 1:
            traduccion = "Rock";
            break;
        case 2:
            traduccion = "Paper";
            break;
        case 3:
            traduccion = "Scissors";
            break;
        case 4:
            traduccion = "Lizzard";
            break;
        case 5:
            traduccion = "Spock";
            break;
    }
    return traduccion;
}