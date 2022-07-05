//--------------------------Productos en html---------------------------------

let title = document.getElementById("titulo")
let seeActivities = document.getElementById("verActividades")
const div = document.querySelector('.div')

let cart = []

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
    watchcart(true)
}


function showActivities() {
    excursions.forEach((rides) => {
        let card = document.createElement("div")
        card.setAttribute("class", "single-package-item")
        card.setAttribute("class", "col-md-4 col-sm-6")
        seeActivities.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", rides.img)
        img.setAttribute("class", "imgpacks")
        let name = document.createElement("h3")
        name.setAttribute("class", "single-package-item")
        name.setAttribute("class", "single-package-item h3")
        name.innerText = (rides.name)
        let description = document.createElement("h4")
        description.setAttribute("class", "packages-para p")
        description.innerText = (rides.description)
        let amount = document.createElement("h5")
        amount.innerText = (rides.amount)
        let price = document.createElement("h4")
        price.innerText =(rides.price)
        price.setAttribute("class", "precio")
        let idProd = document.createElement("a")
        idProd.innerText = (rides.id)
        let button = document.createElement("button")
        button.setAttribute("class", "btn btn-warning")
        button.innerText = ("Agregar al carrito")
        card.append(img, name, description, price, button)

        button.addEventListener("click", function() {
            const item = cart.find((item) => item.id === rides.id)
      
            !item ?cart.push(rides):item.amount++
            
            alert("Agregaste " + rides.name + " al carrito");

            div.innerHTML = ``
            watchcart()
        })
    })

}

showActivities();

//-----------cart----------------

let seeCart = document.querySelector(".container-carrito")
let showcart = document.querySelector(".carrito")
let deleteItem = document.querySelector(".eliminar")

//------productos del cart------------

function removeItem(id) {
    document.getElementById(id).remove()
    const findItem = cart.find(element => element.id == id)
    findItem.amount = 1
    cart = cart.filter(element => element.id != id)
    const total = cart.reduce((acc, item) => acc + (item.price * item.amount), 0)
    document.getElementById("totalcart").innerText = ("Precio Total: $" + total)
    if (!cart.length) {
        document.getElementById("totalcart").remove()
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

function watchcart(first) {
    if (!first) {
        alertCart.remove()
    }
    cart.forEach((element) => {
        const divCart = document.createElement('tr')
        divCart.id = `${element.id}`
        divCart.innerHTML += ` 
        <td class="col-md-4"><img class="img-cart" src="${element.img}"></td>
        <td class="col-md-2"><h3>${element.name}</h3></td>
        <td class="col-md-2"><h5>cantidad: ${element.amount}<h5></td>
        <td class="col-md-2"><h3>${element.price * element.amount}</h3></td>
        <td class="col-md-2"><button class="eliminar" onclick="removeItem('${divCart.id}')" data-id=${element.id}>Quitar</button></td><hr>`
        div.setAttribute("class", "listado")
        div.appendChild(divCart)

    })

    //-----------------total-------------------
    const total = cart.reduce((acc, item) => acc + (item.price * item.amount), 0)
    let totalbuy = document.createElement("h3")
    totalbuy.id = "totalcart"
    totalbuy.setAttribute("class", "total")
    if (total) {
        totalbuy.innerText = ("Precio Total: $" + total)
    }
    div.append(totalbuy)

    localStorage.setItem('cart', JSON.stringify(cart))

}

//---------aviso de cart vacio--------------
let alertCart = document.createElement("h3")
alertCart.setAttribute("class", "vacio")

if (!cart.length) {
    alertCart.innerText = ("El carrito está vacío")
    div.append(alertCart)
} else { alertCart.remove() }


//-------------fconfirmar compra---------------
//    let cerrarCompra = document.querySelector(".eliminar")
//     cerrarCompra.addEventListener ( 
//         div.append(datosCompra)
//     )



//--------------ventana modal(cart)-------------------------

const openCart = document.querySelector('.compras');
const cartCont = document.querySelector('.container-carrito');
const closeCart = document.querySelector('.cerrar-carrito');


openCart.addEventListener('click', (event) => {
    event.preventDefault()
    cartCont.classList.add('ventana-carrito');
})

closeCart.addEventListener('click', function(event) {
    event.preventDefault()
    cartCont.classList.remove('ventana-carrito')
});