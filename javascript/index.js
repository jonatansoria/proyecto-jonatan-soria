//--------------------------Productos en html---------------------------------
const fetchLocal = async () => {
    try{
     const response= await fetch ("./actividades.json")
     const prod = await response.json();
     excursions=prod
    
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
        card.append(img, name, description, price, button,)

//----------------boton agregar carrito-------------
        button.addEventListener("click", function() {
            const item = cart.find((item) => item.id === rides.id)
      
            !item ?cart.push(rides):item.amount++
            
              Swal.fire({
                title:"Agregaste " + rides.name + " al carrito",
                text: 'Es una experencia maravillosa',
                imageUrl: rides.img,
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: 'Custom image',
                footer:"Muchas gracias por elegir Turismo Madryn"
              })

            div.innerHTML = ``
            watchcart()
        })  

    })

} catch (error){
        console.error(error)
    }
}

fetchLocal();

let title = document.getElementById("titulo")
let seeActivities = document.getElementById("verActividades")
const div = document.querySelector('.div')

let cart = []

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
    watchcart(true)
}

//-----------------------ventana modal(carrito)--------------------------------------

const openCart = document.querySelector('.cart-img');
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

//-------------------------carrito----------------------------------

let seeCart = document.querySelector(".container-carrito")
let showcart = document.querySelector(".carrito")
let deleteItem = document.querySelector(".eliminar")

//------productos del carrito------------
function watchcart(first) {
    if (!first) {
        alertCart.remove() 
       
    }
    cart.forEach((element) => {
        const divCart = document.createElement('tr')
        divCart.id = `${element.id}`
        divCart.innerHTML += ` 
        <td class="col-md-3"><img class="img-cart" src="${element.img}"></td>
        <td class="col-md-2"><h3>${element.name}</h3></td>
        <td class="col-md-2"><h5>cantidad: ${element.amount}<h5></td>
        <td class="col-md-2"><h3>${element.price * element.amount}</h3></td>
        <td class="col-md-2"><button class="eliminar" onclick="removeItem('${divCart.id}')" data-id=${element.id}>Borrar</button></td><hr>`
        div.setAttribute("class", "listado")
        div.appendChild(divCart) 
})
//-----------------total-------------------

    const total = cart.reduce((acc, item) => acc + (item.price * item.amount), 0)
    let totalbuy = document.createElement("h2")
    totalbuy.id = "totalcart"
    totalbuy.setAttribute("class", "total")
    if (total) {
        totalbuy.innerText = ("Precio Total: $" + total)
    }
    div.append(totalbuy)

    localStorage.setItem('cart', JSON.stringify(cart))
}

//-----------eliminar productos del carrito-----------------
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

const deleteProd = (e) =>{

Swal.fire({
            title:"eliminaste " + element.name + " del carrito",
            imageUrl: element.img,
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: 'Custom image',
            footer:"Muchas gracias por elegir Turismo Madryn"
          }) 
           e.preventDefault()
        }
          
let removeProd =document.querySelector("eliminar")
removeProd.onclick = deleteProd

//---------aviso de carrito vacio--------------

let alertCart = document.createElement("h3")
alertCart.setAttribute("class", "vacio")

if (!cart.length) {
    alertCart.innerText = ("El carrito está vacío")
    div.append(alertCart)
} else { alertCart.remove() }

//-------quitar formulario de carrito vacio----------

let forms = document.getElementById("form")
forms.setAttribute("class","forms")

if (!cart.length) {
    forms.innerText = ("")
    forms.remove()
} 
//------------alerta de suscripcion------------

const confirmation =(e) =>{
     
    Swal.fire({
        title:'Muchas gracias por suscribirte',
        text:'Pronto te enviaremos todas nuetras novedades',
        icon:'success',
        showConfirmButton: true
       })
      e.preventDefault()
    }

let mail = document.querySelector("form-control")
let subcription = document.querySelector(".appsLand-btn");
subcription.onclick = confirmation

