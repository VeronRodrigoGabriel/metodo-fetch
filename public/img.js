const imgElement = document.getElementById('ImagenA');
const urlImagen = 'https://via.placeholder.com/150'

fetch(urlImagen, {
    mode: 'no-cors',
    cache: 'force-cache'
})
    .then(response => response.blob())
    .then(blobData => {

        const imageUrl = URL.createObjectURL(blobData);
        imgElement.setAttribute('src', imageUrl)
    })
    .catch(error => {
        console.error('Error al obtener la imagen:', error);
    });

