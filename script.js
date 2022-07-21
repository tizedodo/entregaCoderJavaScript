var getData = function (){
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    console.log(nombre +" "+ edad)
}

const darkMode = document.getElementById('darkMode')
const lightMode = document.getElementById('lightMode')

darkMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "#000"
    document.body.style.color = "#fff"
})



botonLightMode.addEventListener('click', () => {
    document.body.style.backgroundColor = "#fff"
    document.body.style.color = "#000"
})

