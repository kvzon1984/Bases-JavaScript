// Tanto var como let pueden ser reasignadas mas adelante
// La diferencia entre let y var
// es que let la crea en la misma linea y var va a llevar la definicion al comienzo del archivo (Hoisting)
// por ende a la variable let no podemos acceder antes de la declaracion de dicha variable
// mientras que a var si ya JS llevara la definicion al comienzo del archivo

var miVarialbe = 'variable var'
let variable = 'Variable let'

// No puedo acceder antes de su inicializacion
//No se puede reaccinar el valor 
const constante = 'Variable const'

console.log(constante);
