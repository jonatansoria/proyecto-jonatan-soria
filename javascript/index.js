//--------------------------Productos en html---------------------------------

let titulo = document.getElementById("titulo")
let verActividades = document.getElementById("verActividades")
const div = document.querySelector('.div')

let carrito = []

if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    mostrarCarrito(true)

}


function mostrarActividad() {
    excursiones.forEach((paseos) => {
        let card = document.createElement("div")
        card.setAttribute("class", "single-package-item")
        card.setAttribute("class", "col-md-4 col-sm-6")
        verActividades.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", paseos.img)
        img.setAttribute("class", "imgpacks")
        let nombre = document.createElement("h3")
        nombre.setAttribute("class", "single-package-item")
        nombre.setAttribute("class", "single-package-item h3")
        nombre.innerText = (paseos.nombre)
        let descripcion = document.createElement("h4")
        descripcion.setAttribute("class", "packages-para p")
        descripcion.innerText = (paseos.descripcion)
        let cantidad = document.createElement("h5")
        cantidad.innerText = (paseos.cantidad)
        let precio = document.createElement("span")
        precio.innerText = (paseos.precio)
        precio.setAttribute("class", "pull-right")
        let idProd = document.createElement("a")
        idProd.innerText = (paseos.id)
        let button = document.createElement("button")
        button.setAttribute("class", "btn btn-warning")
        button.innerText = ("Agregar al carrito")
        card.append(img, nombre, descripcion, precio, button)

        button.addEventListener("click", function() {
            const item = carrito.find((item) => item.id === paseos.id)
            if (!item) {
                carrito.push(paseos)
            } else {
                item.cantidad += 1
            }
            alert("Agregaste " + paseos.nombre + " al carrito");

            div.innerHTML = ``
            mostrarCarrito()
        })
    })

}

mostrarActividad();

//-----------carrito----------------

let verCarrito = document.querySelector(".container-carrito")
let showCarrito = document.querySelector(".carrito")
let eliminarItem = document.querySelector(".eliminar")

//------productos del carrito------------

function removeItem(id) {
    document.getElementById(id).remove()
    carrito = carrito.filter(element => element.id != id)
    const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    document.getElementById("totalCarrito").innerText = ("Precio Total: $" + total)
    if (!carrito.length) {
        document.getElementById("totalCarrito").remove()
    }
}

function mostrarCarrito(first) {
    if (!first) {
        alertCart.remove()
    }

    carrito.forEach((element) => {
        const divCart = document.createElement('tr')
        divCart.id = `${element.id}`
        divCart.innerHTML += ` <hr>
        <td class="col-md-4"><img class="img-carrito" src="${element.img}"></td>
        <td class="col-md-2"><h3>${element.nombre}</h3></td>
        <td class="col-md-2"><h5>cantidad: ${element.cantidad}<h5></td>
        <td class="col-md-2"><h3>$${element.precio * element.cantidad}</h3></td>
        <td class="col-md-2"><button class="eliminar" onclick="removeItem('${divCart.id}')" data-id=${element.id}>Quitar</button></td><hr>`
        div.setAttribute("class", "listado")
        div.appendChild(divCart)

    })

    //-----------------total-------------------
    const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    let totalCompra = document.createElement("h4")
    totalCompra.id = "totalCarrito"
    totalCompra.setAttribute("class", "total")
    totalCompra.innerText = ("Precio Total: $" + total)
    div.append(totalCompra)

    localStorage.setItem('carrito', JSON.stringify(carrito))

}

//---------aviso de carrito vacio--------------
let alertCart = document.createElement("h3")
alertCart.setAttribute("class", "vacio")

if (!carrito.lenght) {
    alertCart.innerText = ("El carrito está vacío")
    div.append(alertCart)
} else { alertCart.remove() }

//    let cerrarCompra = document.querySelector(".eliminar")
//     cerrarCompra.addEventListener ( 
//         div.append(datosCompra)
//     )



//--------------ventana model(carrito)-------------------------

const abrirCarrito = document.querySelector('.compras');
const elCarrito = document.querySelector('.container-carrito');
const cerrarCarrito = document.querySelector('.cerrar-carrito');


abrirCarrito.addEventListener('click', (event) => {
    event.preventDefault()
    elCarrito.classList.add('ventana-carrito');
})

cerrarCarrito.addEventListener('click', function(event) {
    event.preventDefault()
    elCarrito.classList.remove('ventana-carrito')
});

// setStorage(){

// }