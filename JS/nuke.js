//juego creado a base de A-frame con ayuda del after :D

// 0 vacio
// 1 pared
// 2 jugador
// 3 enemigo
// 4 arma


let mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const TAMANO_PARED = 5;
const ALTO_PARED = 3;

let muro;

let muros = document.querySelector('#muros');
let scoreElement = document.querySelector('#score');
let jugador = document.querySelector('#jugador');

for (let x = 0; x < mapa.length; x += 1) {
    for (let z = 0; z < mapa.length; z += 1) {
        let posicion = (x - mapa.length / 4) * TAMANO_PARED +
            " " +
            1.5 +
            " " +
            (z - mapa[x].length / 2) * TAMANO_PARED;

        if (mapa[x][z] === 0) {
            continue;
        } else if (mapa[x][z] === 1) {
            // dibujar pared
            muro = document.createElement('a-box');
            muros.appendChild(muro);
            muro.setAttribute('color', 'fff');
            muro.setAttribute('material', 'src: #pared');
            muro.setAttribute('width', TAMANO_PARED);
            muro.setAttribute('height', ALTO_PARED);
            muro.setAttribute('depth', TAMANO_PARED);
            muro.setAttribute('position', posicion);
            muro.setAttribute('static-body', "");

        } else if (mapa[x][z] === 2) {
            // dibujar el jugador
            jugador.setAttribute('position', posicion)
        }
    }
}