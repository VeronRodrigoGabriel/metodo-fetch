const mostrar = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    })
    const respuesta = await data.json()

    const elementos = respuesta.slice(0, 3)

    return console.log(elementos)
}

mostrar()