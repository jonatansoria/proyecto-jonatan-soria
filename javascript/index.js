
//--------------------------Productos en html---------------------------------

let titulo = document.getElementById("titulo")
let verActividades = document.getElementById("verActividades")
const div = document.querySelector('.div')
let carrito = []

function mostrarActividad() {
    excursiones.forEach((paseos) => {
        let card = document.createElement("div")
        card.setAttribute("class","single-package-item")
        card.setAttribute("class","col-md-4 col-sm-6")
        verActividades.append(card)
        let img = document.createElement("img")
        img.setAttribute("src",paseos.img)
        img.setAttribute("class","imgpacks")
        let nombre = document.createElement("h3")
        nombre.setAttribute("class","single-package-item")
        nombre.setAttribute("class","single-package-item h3")
        nombre.innerText = (paseos.nombre)
        let descripcion = document.createElement("h4")
        descripcion.setAttribute( "class","packages-para p")
        descripcion.innerText = (paseos.descripcion)
        let cantidad=document.createElement("h5")
        cantidad.innerText = (paseos.cantidad)
        let precio = document.createElement("span")
        precio.innerText = (paseos.precio)
        precio.setAttribute("class","pull-right")
        let button = document.createElement("button")
        button.setAttribute("class","btn btn-warning")
        button.innerText = ("Agregar al carrito")        
        card.append(img, nombre,descripcion, precio, button)

        button.addEventListener("click", function () {
        carrito.push(paseos)
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



function mostrarCarrito() {
    alertCart.remove()
   
    carrito.forEach((element) => {
        const divCart = document.createElement('tr')
        divCart.innerHTML += ` <hr>
        <td class="col-md-4"><img class="img-carrito" src="${element.img}"></td>
        <td class="col-md-2"><h3>${element.nombre}</h3></td>
        <td class="col-md-2"><h5>cantidad: ${element.cantidad}<h5></td>
        <td class="col-md-2"><h3>$${element.precio}</h3></td>
        <td class="col-md-2"><button class="eliminar" data-id=${element.id}>Quitar</button></td><hr>`
        div.setAttribute("class","listado")
        div.appendChild(divCart)
        
  //------------quitar producto-------------------------------------------

        // const quitarProducto = document.querySelector(".eliminar")
        // quitarProducto.addEventListener("click",() => {
        // carrito.remove(divCart) 
       //mostrarCarrito()

    })
      
      }

    //-----------------total-------------------
    const total = carrito.map((item) => parseInt(item.precio)).reduce((precioTotal,itemPrecio) => precioTotal + itemPrecio, 0);

    if (total >0) {
       let totalCompra = document.createElement("h4")
       totalCompra.setAttribute("class","total")
       totalCompra.innerText = ("Precio Total: $" + total)
       div.append(totalCompra)
      
}
  

//--------------ventana model(carrito)-------------------------

const abrirCarrito = document.querySelector('.compras');
const elCarrito = document.querySelector('.container-carrito');
const cerrarCarrito = document.querySelector('.cerrar-carrito');


let alertCart = document.createElement("h3")
alertCart.setAttribute("class", "vacio")

if (!carrito.lenght) {
    alertCart.innerText = ("El carrito está vacío")
    div.append(alertCart)
}
else {alertCart.remove()}


abrirCarrito.addEventListener('click',(event)=>{
    event.preventDefault()
    elCarrito.classList.add('ventana-carrito');
});

cerrarCarrito.addEventListener('click',function (event) {
        event.preventDefault()
        elCarrito.classList.remove('ventana-carrito')
    });