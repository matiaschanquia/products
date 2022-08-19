

const nombre = document.getElementById("nombre-product")
const info = document.getElementById("sobre-product")
const productos = document.getElementById("products")
const boton = document.getElementById("boton")

boton.addEventListener("click", agregarProducto)

function agregarProducto() {
    const nombreProducto = nombre.value
    const infoProducto = info.value
    if (nombreProducto != "")
    {
        var codigoProducto =  `
                            <img class="btn-borrar" src="img/delete.png" alt="delete">
                            <div>
                                <img src='https://rincondelceramista.com.ar/wp-content/uploads/woocommerce-placeholder-400x400.png' alt='producto x'>
                            </div>
                            <div class='container-info'>
                                <h4>${nombreProducto}</h4>
                                <p>${infoProducto}</p>
                            </div>`   /* INTERPOLACION JAVASCRIPT */
        if (infoProducto == "")
        {
            codigoProducto =  `
                                <img class="btn-borrar" src="img/delete.png" alt="delete">  
                                <div>
                                    <img src='https://rincondelceramista.com.ar/wp-content/uploads/woocommerce-placeholder-400x400.png' alt='producto x'>
                                </div>
                                <div class='container-info'>
                                    <h4>${nombreProducto}</h4>
                                    <p>Sin información</p>
                                </div>`
        }
        const article = document.createElement("article")
        article.className = "product" /* Crea una clase en el elemento article */
        article.innerHTML = codigoProducto
        productos.appendChild(article)
        
    }
    nombre.value = ""
    info.value = ""
}

productos.addEventListener("click", (e) => {
    borrarProducto(e);
})

function borrarProducto(e) {
    if (e.target.classList.contains("btn-borrar")) {
        var product = e.target.parentNode;
        product.remove();
    }
}