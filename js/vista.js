class Vista{
    constructor(){
        // Variables que se utilizan en la pagina
        this.personaje = document.querySelector("#busqueda_personaje")
        this.buscador_btn = document.getElementById("busqueda_personaje_boton")

        this.fijarEventos()
    }

    fijarEventos(){
        this.buscador_btn.addEventListener("click", () => {
            this.buscar()
        })
    }

    buscar(){
        //ERROR: No se logran obtener los datos, el objeto esta vacio
        controlador.buscar(this.recuperar())
    }

    recuperar(){
        return this.personaje.value
    }

    mensaje(texto) {
        alert(texto);
    }
}