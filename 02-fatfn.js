// Arrow functions
// Las funciones que declaremos como fn en js las podemos usar como una especie de clases
// AL LLAMAR A NUETRA FUNCION CON NEW (LINEA: 10) LO QUE HACE ES QUE CREA UNA INSTANCIA PERO PARA ESO NMECESITAMOS UNA CLASE
// Y ES AHI DONDE LAS FUNCIONES TIENEN UN CONTEXO DE THIS
// AL LLAMARLO CON new EL OBJETO LITERAR EMPIEZA A TOMAR LAS PORPIEDADES QUE LE DAMOS CON EL THIS E IGNORA EL RETURN 

function Fn() {
    this.prop = "propiedad"
    return 'Mi funcion'
}

Fn.prototype.lala = function FuncionDePrototipo () {}


const r = new Fn()

console.log(r.__proto__);

// fat arrow function
// IMPORTANTE: las funciones declaradas con la palabra reservada con function estas pueden ser llamadas con new pero las arrow function no
// ya que estas funciones con function tambien funcionan como clases y tienen el contexto de this

const fatFn = () => {
    return 'Arrow functions'
}

const r1 = fatFn()

console.log(r1);