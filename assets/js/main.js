// 1. Implementar ES6 para toda la estructura del código.

// 2. Crear una función asíncrona para obtener los datos de la URL.

// 3. Dentro de un bloque Try / Catch, utilizar el método fetch mediante la instrucción await
// para recibir el valor directamente de la promesa.

// 4. Utilizar un método de iteración de arreglos(por ejemplo: forEach) para mostrar
// solamente los primeros 20 títulos de los datos recibidos.

// 5. Crear una función que retorne una promesa después de tres(3) segundos utilizando
// setTimeout.El mensaje a retornar debe ser un string que indique: “Información
// Enviada”.

// 6. Crear una función asíncrona que permita recibir el mensaje de la promesa creada en
// el requerimiento cinco(5), de forma directa con await, para ser mostrado en la consola
// del navegador, agregando el llamado a las dos funciones principales.

// Función para obtener los datos de la URL usando promesas
const obtenerDatos = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    return new Promise(async (resolve, reject) => {
        try {
            // Conexión a la URL usando fetch
            const response = await fetch(url);

            const data = await response.json();

            setTimeout(() => {
                data.slice(0, 20).forEach(album => {
                    console.log(album.title);
                });
            }, 3000);

            const imageContainer = document.getElementById('imageContainer');

            data.slice(0, 20).forEach(album => {
                const img = document.createElement('img');
                img.src = album.url;
                img.alt = album.title;
                imageContainer.appendChild(img);
            });

            await enviarMensajeDespuesDeTresSegundos();
            resolve();
        } catch (error) {
            reject('Error al obtener los datos:', error);
        }
    });
};

// Función que retorna una promesa para enviar un mensaje después de 3 segundos
const enviarMensajeDespuesDeTresSegundos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Información Enviada después de 3 segundos');
            resolve();
        }, 3000);
    });
};


// __________________________Extras___________________________________

// Obtener el botón de inicio
const startButton = document.getElementById('startButton');

// Agregar un evento de clic en el botón
startButton.addEventListener('click', () => {
    obtenerDatos()
        .then(() => {
            console.log('Datos obtenidos correctamente.');
        })
        .catch(error => {
            console.error(error);
        });
});
