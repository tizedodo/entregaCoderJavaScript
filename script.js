class Juego {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria

    }
}

let juegos = []

if(localStorage.getItem('juegos')) {
    juegos = JSON.parse(localStorage.getItem('juegos'))
} else {
    localStorage.setItem('juegos', JSON.stringify(juegos))
}

const formJuegos = document.getElementById("formJuegos")
const divJuegos = document.getElementById("divJuegos")
const botonJuegos = document.getElementById("botonJuegos")


formJuegos.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    let datForm = new FormData(e.target) 


    let juego = new Juego(datForm.get('nombre'), datForm.get('precio'), datForm.get('categoria'))
    juegos.push(juego)
    console.log(juegos)
    localStorage.setItem('juegos', JSON.stringify(juegos))
    formJuegos.reset()
})

botonJuegos.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('juegos'))
    divJuegos.innerHTML = ""
    arrayStorage.forEach((juego, indice) => {
        
        divJuegos.innerHTML += `
        <div class="card_container" id="juego${indice}">
            <div class="card_title"><h2 class="card_name">${juego.nombre}</h2></div>
            <div class="card_precioBTN">
                <p class=""> $ ${juego.precio}</p>
                <p class=""> ${juego.categoria}</p>
                <button class="button-5 btnEliminar">Eliminar Juego</button>
            </div>
        </div>
        
        `
    });

    arrayStorage.forEach((juego, indice) => {
        let botonCard = document.getElementById(`juego${indice}`).lastElementChild.lastElementChild
        botonCard.addEventListener('click', () => {
            document.getElementById(`juego${indice}`).remove()
            juegos.splice(indice,1)
            localStorage.setItem('juegos', JSON.stringify(juegos))
            console.log(`${juego.nombre} Eliminada`)
        })
    })

    Swal.fire({
        title: 'Estos son los juegos que tenes guardado en tu navegador',
        text: 'Gracias por usar tizeGame!',
        footer: '<a class="link_alert" href="">   >Si te gustó y querés apoyar el proyecto podés invitarme un cafecito por acá. ¡Muchas gracias!</a>'
      })

})


const resgritarJuego = document.getElementById("resgritarJuego")
const nombreDelJuego = document.querySelector('input')


resgritarJuego.addEventListener('click', () => {

    if (nombreDelJuego.value.length == 0){
        
        Swal.fire({
            icon: 'error',
            title: 'Porfavor completa todos los campos con datos valido!',
            text: 'Pinche pendejo!',
          })

    }else{
        Swal.fire({
            icon: 'success',
            title: 'El juego fue registrardo en su local estorage!',
            footer: '<a class="link_alert" href="">Si te gustó y querés apoyar el proyecto podés invitarme un cafecito por acá. ¡Muchas gracias!</a>'
     })
    }
})

