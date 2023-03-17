//Constructor de productos

class Producto {
    constructor (nombre, precio, img) {
        this.nombre = nombre
        this.precio = precio
        this.img = img
    }
}

//div padre
const shopContent = document.getElementById("shopContent")



const ender3 = new Producto ("Creality Ender 3", 109000, "/img/ender3.jpg")
const ender3V2 = new Producto("Creality Ender 3 V2", 170000, "/img/ender3v2.jpg")
const geniusPro = new Producto("Artillery Genius Pro", 180000, "/img/genius.jpg")
const halotOne = new Producto("Creality Halot One", 140000, "/img/halotone.jpg")
const halotSky = new Producto ("Creality Halot Sky", 310000, "/img/halotSky.jpg")

const arrayImpresoras = [ender3, ender3V2, geniusPro, halotOne, halotSky]

//carrito



let carrito = []

arrayImpresoras.forEach((impresoras) => {
    let content = document.createElement("div")
    content.className="card";
    content.innerHTML = `
            <article>
				<h3>${impresoras.nombre}</h3>
				<img class="impresora" src="${impresoras.img}" alt="Impresora 3D modelo Ender 3">
				<p class="precio">Precio: $${impresoras.precio}</p>
			</article>`;

        shopContent.append(content)

    let comprar = document.createElement("button")
    comprar.className="comprar;"
    comprar.innerText = "Agregar al Carrito"

    content.append(comprar)
    
// EVENTO
    comprar.addEventListener("click", () => {
        carrito.push({
            Nombre: impresoras.nombre,
            Precio: impresoras.precio,
            img: impresoras.img
        })
        console.log(carrito)
    })

});