
let nombre;
let contraseña;
let producto;
let precio;
let cantidad;
let total = 0;
let precioPromedio =3000;


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
            precio = 5000;
            break;
        case "buceo":
            precio = 8000;
            break;
        case "snorkel con lobos":
            precio = 4000;
            break;
        case "ciclismo aventura":
            precio = 3000;
            break;
        case "kayak aventura":
            precio = 2500;
            break;
        case "punta norte":
            precio = 3000;
            break;

        default:
            alert("no ingreso actividad");
            break;
    }
    return precio;
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

const dias =[3,5,7,14];// cantidad de dias de la estadia
const precioDia =[2000,3000,5000]; //varia segun la habitacion.
let precioEstadia = dias [2] * precioDia[2] ;// precio de la estadia seleccionada

console.log(precioEstadia);

dias.unshift ("2"); //se agrega un nuevo elemento a dias.

precioEstadia = dias [2] * precioDia[2] ;// se vuelve a calcular con el nuevo elemento agregado.
console.log(precioEstadia);// se calcula nuevamente el valor de la estadia ya que los elemntos cambiaron de posicion.