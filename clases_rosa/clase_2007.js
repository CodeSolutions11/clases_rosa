/*
const section = document.querySelector('section');

// Acceder al elemento a
section.children[0].href = '#';

console.log(section);
console.log(section.children);
console.log(section.children[0]);
*/



// Construir un boton desde JS SIN ESCRIBIR NADA EN HTML

import {crearBoton} from './modulos/funciones.js'

crearBoton('boton 1', 'Pablo')
crearBoton('boton 2', 'Andres')
crearBoton('boton 3', 'Carla')
crearBoton('boton 4', 'Rosa')

// Construir una tabla desde JS SIN ESCRIBIR NADA EN HTML

import { crearTable } from './modulos/funciones.js'

crearTable()