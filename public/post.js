const usuario = {
    "userId": 11,
    "id": 101,
    "title": "a",
    "body": "a"
}


const subir = async (usuario) => {


    const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const respuesta = await data.json()


    console.log(respuesta)
}

subir()