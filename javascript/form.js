//---------guardar informacion del usuario----------

let dateUser =document.querySelector("#btn-confirmar").addEventListener("click",registerUser);

function registerUser(){

  let user =[],
     mail= "",
     nameUser="",
     adress = "",
     data="",
     city="",
     chekMail= ""

 mail= document.querySelector("#inputEmail").value;
 nameUser= document.querySelector("#inputname").value;
 adress= document.querySelector("#inputAddress").value;
 data= document.querySelector("#inputAddress2").value;
 city= document.querySelector("#inputcity").value;
 chekMail= document.querySelector("#gridCheck").value;
 
 user.push(mail,nameUser,adress,data,city,chekMail);
}

//--------------alert-compra confirmada---------

const buyProduct =(e) =>{
     
    Swal.fire({
        title:'Muchas gracias por su compra',
        text:'los datos de su compra fue enviado a su correo',
        icon:'success',
        showConfirmButton: true,
        footer:"Muchas gracias por elegir Turismo Madryn"
       })
      e.preventDefault()
    }
let buyConfirmation = document.querySelector(".finalizar-compra");
buyConfirmation.onclick = buyProduct;
