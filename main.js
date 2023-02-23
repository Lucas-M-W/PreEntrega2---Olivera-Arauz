// INGRESO A LA PAGINA
const passAutorizado = "1234"
const usuarioAutorizado = "Lucas"

alert ("Bienvenido a Yokai Print Studio. Para hacer uso de la calculadora de precios, por favor, trate de revisar su archivo en un laminador como Chitubox o Prusa Slicer para que así podamos hacer un calculo más preciso de su pedido. Muchas gracias.")
let usuario = prompt("Por favor, ingrese su usuario")
let pass = prompt("Por favor, ingrese su contraseña")

const filamento = {
    nombre: "filamento",
    // valor en gramos
    cantidad: 1000,
    precio: 3200,
}


const resina = {
    nombre: "resina",
    //valor en gramos
    cantidad: 250,
    precio: 4500,
}

if (usuario === usuarioAutorizado && pass === passAutorizado) {
    alert ("Bienvenido " + usuario + ", ha ingresado correctamente!")
    
    //Si se entra a la página, ingresar la cantidad de piezas
    let cantidadPiezas = parseInt(prompt("Por favor, introduzca el número de piezas que quiere presupuestar"))

    let material = prompt("Por favor, indique si su pedido será de resina o filamento")
    console.log(material);
    if (material === "resina") {
            for (let i = 0; i < cantidadPiezas; i ++) {
                let precioResina = resina.precio;
                    console.log (precioResina)
                let cantidadResina = resina.cantidad;
                    console.log (cantidadResina);
                alert ("Su pedido es de " + material + " a continuación definiremos un costo APROXIMADO")
        
                //Calcular el precio del pedido. Primero se le pedirá un peso aproximado en gramos de la pieza
        
                let peso = parseInt(prompt("Por favor, ingrese el peso en GRAMOS aproximado de la pieza que quiere encargar"))
                alert ("El peso de la pieza es de " + peso + "g.")
        
                //Ahora le pediremos

                let presupuesto = calcularResina (peso, precioResina, cantidadResina);
                alert ("El precio de su pieza es aproximadamente de $" + presupuesto.toFixed(2));
    }
        
        
        
        
    } if (material === "filamento") {

        for (let i = 0; i < cantidadPiezas; i ++) {
            let precioFilamento =  filamento.precio;
            console.log (precioFilamento)
            let cantidadFilamento = filamento.cantidad;
        alert ("Su pedido es de " + material + " a continuación definiremos un costo APROXIMADO")

        //Calcular el precio del pedido. Primero se le pedirá un peso aproximado en gramos de la pieza
        
        let peso = parseInt(prompt("Por favor, ingrese el peso en GRAMOS aproximado de la pieza que quiere encargar"))
        alert("El peso de la pieza es de " + peso + "g.")

        //Ahora le pediremos
        
        let presupuesto = calcularPla (peso, precioFilamento, cantidadFilamento);
        alert ("Según el peso de su pieza, el presupuesto inicial sería de $" + presupuesto.toFixed(2));
        }
    }
    else {
        alert ("Material no reconocido o no disponible.")
    }
    
    
    
    
    
} else {
    alert ("Usuario " + usuario + " no reconocido, por favor intente nuevamente.")
}



function calcularPla (peso, precioFilamento, cantidadFilamento) {
    let presupuesto = (((peso * precioFilamento) / cantidadFilamento) * 1.8 )
    return presupuesto;
}

function calcularResina (peso, precioResina, cantidadResina) {
    let presupuesto = (((peso * precioResina) / cantidadResina) * 1.8)
    return presupuesto;
}