class Controlador {

    buscar(dato) {
        console.log(dato)

        //Entrada de datos
        const peticion = { "folder": "characters", "query": dato }

        // Muestra un mensaje de carga antes de llamar a la función
        console.log('Obteniendo datos...')

        Swal.fire({
            title: "Obteniendo Datos",
            html: `Buscando datos para ${dato}`,
            timerProgressBar: true,
        })

        this.realizarConsultaAPI(peticion).then(data => {
            Swal.close()
            if (data) {
                console.log('Respuesta de la API:', data)
                // Aquí puedes manejar la respuesta de la API como desees
            } else {
                console.log('No se obtuvo una respuesta válida de la API.')

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No se obtuvo una respuesta válida de la API."
                })
            }
        });
    }

    async realizarConsultaAPI(peticion) {
        try {
            // Muestra el mensaje de carga
            console.log('Cargando datos...');

            const url = `https://genshin-db-api.vercel.app/api/v5/${peticion.folder}?query=${peticion.query}`
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error('No se pudo obtener una respuesta de la API.')
            }

            const data = await response.json()
            return data
        } catch (error) {
            console.error('Ocurrió un error al realizar la solicitud a la API:', error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ocurrió un error al realizar la solicitud a la API:",
                footer: error
            })

            return null
        }
    }

    // mostrarDatos(datos){

    // }
}