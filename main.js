// INGRESO A LA PAGINA
const passAutorizado = "1234"
const usuarioAutorizado = "Lucas"

alert ("Bienvenido a Oni Print Studio. Para hacer uso de la calculadora de precios, por favor, trate de revisar su archivo en un laminador como Chitubox o Prusa Slicer para que así podamos hacer un calculo más preciso de su pedido. Muchas gracias.")
let usuario = prompt("Por favor, ingrese su usuario")
let pass = prompt("Por favor, ingrese su contraseña")

const filamento = {
    nombre: "filamento",
    cantidad: "1000g",
    precio: 3200,
}

const resina = {
    nombre: "resina",
    cantidad: "250g",
    precio: 4500,
}

if (usuario === usuarioAutorizado && pass === passAutorizado) {
    alert ("Bienvenido " + usuario + ", ha ingresado correctamente!")
    
    //Si se entra a la página, ingresar el material del pedido
    let material = prompt("Por favor, indique si su pedido será de resina o filamento")
    console.log(material);
    if (material === "resina") {
        alert ("Su pedido es de " + material + " a continuación definiremos un costo APROXIMADO")
        
        //Calcular el precio del pedido. Primero se le pedirá un peso aproximado de la pieza
        
        let peso = parseInt(prompt("Por favor, ingrese el peso en GRAMOS aproximado de la pieza que quiere encargar"))
        alert ("El peso de la pieza es de " + peso + "g.")

        //Ahora le pediremos 






    } if (material === "filamento") {
        alert ("Su pedido es de " + material + " a continuación definiremos un costo APROXIMADO")

        let peso = parseInt(prompt("Por favor, ingrese el peso en GRAMOS aproximado de la pieza que quiere encargar"))
        alert("El peso de la pieza es de " + peso + "g.")
    }
    else {
        alert ("Material no reconocido o no disponible.")
    }
    
    
    
    
    
} else {
    alert ("Usuario " + usuario + " no reconocido, por favor intente nuevamente.")
}