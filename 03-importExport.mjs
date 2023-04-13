const nombres = ['Lucas', 'Juan', 'Pedro', 'Juan', 'Mateo' ]
const edades = [25, 45, 18, 17, 65 ]
const apellidos = ['Alvares', 'Mardonado', 'Rodriguez', 'Zambrano', 'Aguilera' ]

const fn1 = () => {
    console.log('Soy la funcion 1');
}

function fn2 () {
    console.log('Soy la funcion 2');
}

// esta es la forma antigua de exportar archivos
// module.exports = {
//     nombres,
//     edades
// }

// LA nueva forma de exportar es 

export {
    edades, 
    apellidos,
    fn1,
    fn2
}

export default nombres