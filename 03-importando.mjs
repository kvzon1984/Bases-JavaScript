// const listaNombres = require('./03-importExport')

// console.log(listaNombres);

// la nueva forma de importar ahora es 

import data, { edades, apellidos, fn1, fn2} from './03-importExport.mjs'

console.log(edades, apellidos, data);
fn1()
fn2()