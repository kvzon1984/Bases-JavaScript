const url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url, {
//     method: 'POST', // Crear un elemento y le enviamos el metodo que enviamos
//     headers: { //Le desimos que formato le enviamos en formato json
//         'Content-Type': 'aplication/json',
//         'Authorization': 'Bearer eltokendeautorizacion'
//     },
//     body: JSON.stringify({ // En el boby va la informacion que deseo enviar al servidor y debo enviarla como un string para eso se acupa el JSON.stringify({})
//         name: 'Isaac Vega',
//         website: 'google.com'
//     })
// })
//     .then((res) => res.json())
//     .then((data) => console.log(data))

const fn = async () => {
    const response = await fetch(url, {
        method: 'POST', // Crear un elemento y le enviamos el metodo que enviamos
        headers: { //Le desimos que formato le enviamos en formato json
            'Content-Type': 'aplication/json',
            'Authorization': 'Bearer eltokendeautorizacion'
        },
        body: JSON.stringify({ // En el boby va la informacion que deseo enviar al servidor y debo enviarla como un string para eso se acupa el JSON.stringify({})
            name: 'Isaac Vega',
            website: 'google.com'
        })
    })

    const data = await response.json()

    console.log(data);
}

fn()
