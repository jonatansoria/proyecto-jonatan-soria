
//-----------variables--------------
let nombre;
let contraseña;
let producto;
let precio;
let cantidad;
let total = 0;
let precioPromedio =3000;

//--------------simulador interactivo (ciclos y funciones)--------------
function pedirNombre() {
    nombre = prompt ("ingrese su nombre")
while (nombre === "" || !isNaN(nombre)) {
    nombre = prompt ("ingrese su nombre nuevamente")
}
}

function pedirContraseña() {
    contraseña = prompt ("ingrese su contraseña")
    while (contraseña === "") {
        contraseña= prompt ("ingrese su contraseña por favor")
    }
}

function pedirProducto() {
    producto = prompt ("que actividad desea contratar");

    switch (producto) {
        case "avistajes":
            valor = 5000;
            break;
        case "buceo":
            valor = 8000;
            break;
        case "snorkel con lobos":
            valor = 4000;
            break;
        case "ciclismo aventura":
            valor = 3000;
            break;
        case "kayak aventura":
            valor = 2500;
            break;
        case "punta norte":
            valor = 3000;
            break;

        default:
            alert("no ingreso actividad");
            break;
    }
    return valor;
}

function cantidadPersonas() {
    cantidad = parseInt(prompt("ingrese la cantidad de personas para la actividad"));
    while (isNaN(cantidad)) {
    cantidad = parseInt(prompt("ingrese la cantidad de personas para la actividad"));
       } 
    return cantidad;
}

function precioTotal(pedirProducto,cantidadPersonas) {
    total += pedirProducto * cantidadPersonas;
}

function iniciar() {
    pedirNombre();
    pedirContraseña();
    precioTotal(pedirProducto(),cantidadPersonas());
console.log(total);
}

function cantidadDias(dias) {
    
}
//iniciar();

// -------------Agregando Arrays-------------------------------------------

const dias =[3,5,7,14];// cantidad de dias de la estadia
const precioDia =[2000,3000,5000]; //varia segun la habitacion.
let precioEstadia = dias [2] * precioDia[2] ;// precio de la estadia seleccionada

console.log("Precio de estadia " + "= " + precioEstadia);

dias.unshift ("2"); //se agrega un nuevo elemento a dias.

precioEstadia = dias [2] * precioDia[2] ;// se vuelve a calcular con el nuevo elemento agregado.
console.log("Nuevo precio de estadia " + "= " + precioEstadia);// se calcula nuevamente el valor de la estadia ya que los elemntos cambiaron de posicion.

//----------clases y contructor----------------------

class Actividades {
    constructor (nombre,costo) {
         this.nombre = nombre;
         this.costo = costo;
    }  
     
}

const actividad1 = new Actividades( "avistajes",5000);
const actividad2 = new Actividades( "Buceo",8000);
const actividad3 = new Actividades( "Snorkel con lobos",4000);
const actividad4 = new Actividades( "ciclismo aventura",3000);
const actividad5 = new Actividades( "kayak aventura",2500);
const actividad6 = new Actividades( "Punta norte",3000);

class Reservas{
    constructor (actividad,personas){
        this.actividad = actividad;
        this.personas = personas;
}
       valorReservas() {
        let total = this.actividad.costo * this.personas;
         return total;
        }
    
    detalleReservas(){}
}


const reserva1 = new Reservas(actividad1,2);
const reserva2 = new Reservas(actividad2,3);
const reserva3 = new Reservas(actividad3,5);
const reserva4 = new Reservas(actividad4,2);
const reserva5 = new Reservas(actividad5,4);
const reserva6 = new Reservas(actividad6,1);

class Pedido {
    constructor (fecha,detalles){        
      this.fecha = fecha;
      this.detalles = detalles;
    }
    totalReserva(){
        let totales = 0;
        for (const compras of this.detalles) {
            totales = totales + compras.valorReservas();
        }
        return totales
    }
    }
 
const paseos = [];
paseos.push(reserva1);
paseos.push(reserva2);
paseos.push(reserva5);

const packComprado = new Pedido (new Date(),paseos);

//-----------------ejecucion en consola-------------
console.log(reserva1);
console.log(reserva2);
console.log(reserva3);
console.log(reserva4);
console.log(reserva5);
console.log(reserva6);

console.log("Precio de la actividad elegida y cantidad de personas " + "= " + reserva1.valorReservas());
console.log("Precio de la actividad elegida y cantidad de personas " + "= " + reserva2.valorReservas());
console.log("Precio de la actividad elegida y cantidad de personas " + "= " + reserva3.valorReservas());
console.log("Precio de la actividad elegida y cantidad de personas " + "= " + reserva4.valorReservas());
console.log("Precio de la actividad elegida y cantidad de personas " + "= " + reserva5.valorReservas());
console.log("Precio de la actividad elegida y cantidad de personas " + "= " + reserva6.valorReservas());


console.log("Precio total del pack elegido " + "= " + packComprado.totalReserva());