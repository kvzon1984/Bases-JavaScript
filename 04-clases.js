// // expresion de clases
// const Rectangulo = class R {

// }

// Declaracion de clases
class Rectangulo {

}

function Cuadrado() {}
// console.log(Rectangulo, Cuadrado);
const r = new Rectangulo()

class Persona {
    // propiedades privadas se declara con un #
    #hambre
    nombre = "Mandalorian"
    static estatico = 'Estatico...!!'

    constructor(estado = 'feliz', nombre='Masdalorian', hambre = false) {
        this.estado = estado
        this.nombre = nombre
        this.#hambre = false
    }

    getComentario (){
        console.log(`Soy la clase Persona ${this.nombre} y esta ${this.estado} aprendiendo React y ${this.#hambre ? 'y tengo hambre' : 'y estoy satisfecho'}` );
    }

    // metodos estaticos son aquellos que solo se pueden acceder a travez de la clase y no es necesario generar una nueva instancia de clase
    // No pueden acceder las propiedades de la instancia ni publicas ni privadas 
    // Para acceder es necesario declar la propiedad con la palabra reservada de static

    static comer() {
        console.log(this.estatico, 'Estoy comiendo');
    }

}

//Cuando llamammos a una clas con el new lo primero que hace es llamar a la funcion contructor()

Persona.comer()

const persona1 = new Persona( 'feliz','Isaac')
persona1.getComentario()
const persona2 = new Persona('triste', 'Carlos')
persona2.getComentario()
const persona3 = new Persona()
persona3.getComentario()