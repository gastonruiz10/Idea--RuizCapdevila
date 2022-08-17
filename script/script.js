class Consulta {
    constructor(name, telefono, email, mensaje) {
        this.name = name
        this.telefono = telefono
        this.email = email
        this.mensaje = mensaje
    }
}

const idContacto = document.getElementById("idContacto")

const contacto = []

idContacto.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const telefono = document.getElementById("telefono").value
    const email = document.getElementById("email").value
    const mensaje = document.getElementById("mensaje").value

    const contactos = new Consulta(name, telefono, email, mensaje)

    contacto.push(contactos)

    idContacto.reset()
    console.log(contacto)
    alert("Tu mensaje fue enviado")
})



