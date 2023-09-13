//juego creado a base de A-frame con ayuda del after :D

// 0 vacio
// 1 pared
// 2 jugador
// 3 arma ak47
// 4 arma M4A1
// 5 arma AWP
// 6 arma DK


let mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    [1, 4, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 5, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const TAMANO_PARED = 5;
const ALTO_PARED = 3;

let muro;

let muros = document.querySelector('#muros');
let jugador = document.querySelector('#player');
let armas = document.querySelector('#armas');
let armas1 = document.querySelector('#armas1')
let armas2 = document.querySelector('#armas2')
let armas3 = document.querySelector('#armas3')


for (let x = 0; x < mapa.length; x += 1) {
    for (let z = 0; z < mapa.length; z += 1) {
        let posicion = (x - mapa.length / 2) * TAMANO_PARED +
            " " +
            1.5 +
            " " +
            (z - mapa[x].length / 2) * TAMANO_PARED;

        if (mapa[x][z] === 0) {
            continue;
        } else if (mapa[x][z] === 1) {
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
            jugador.setAttribute('position', posicion)
        }
        else if (mapa[x][z] === 3){
            armas.setAttribute('position', posicion);
            armas.setAttribute('material', 'src: #weapon');
        }
        else if(mapa[x][z] === 4){
            armas1.setAttribute('position', posicion);
            armas1.setAttribute('material', 'src: #weapon1');
        }
        else if(mapa[x][z] === 5){
            armas2.setAttribute('position', posicion);
            armas2.setAttribute('material', 'src: #weapon2');
        }else if(mapa[x][z] === 6){
            armas3.setAttribute('position', posicion);
            armas3.setAttribute('material', 'src: #weapon3');
        }
    }
}