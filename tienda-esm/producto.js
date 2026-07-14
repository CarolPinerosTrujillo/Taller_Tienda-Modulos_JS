//PRODUCTO

class Producto {
    constructor(nombre, precio, categoria, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria ;
        this.stock = stock ;
        
    }

    hayStock(cantidad){
        return cantidad <=this.stock ; 
    }

    ficha(){
        return ` Nombre Producto: ${this.nombre} | Precio: $${this.precio} | Categoria: ${this.categoria} | Stock: ${this.stock} unidades`
    }
}


export default Producto ;