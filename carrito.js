//CARRITO
const { formatearPrecio, calcularDescuento } = require("./utilidades.js");
const Producto = require("./producto.js");
const Usuario = require("./usuario.js");

class Carrito{
    constructor(usuario) {
        this.usuario = usuario ; 
    }

    items = [];
    
    agregar(producto, cantidad){
        if (producto.hayStock(cantidad)==true) {
            this.items.push({producto,cantidad});
            producto.stock -= cantidad;
            console.log("Producto agregado : ",cantidad + "-" ,producto.ficha());
            
        } else {
            console.log("Sin Stock");
            
        }

    }
    subtotal(){
        
     let totalSinDescuento=0;

        for (let  item of this.items) {
            totalSinDescuento+= item.producto.precio * item.cantidad;
        }

        return totalSinDescuento;
    }

    total (){
        if (this.usuario.esVip==true) {
            return calcularDescuento(this.subtotal(),10)
        } else {
            return this.subtotal();
        }
    }
    
    recibo(){
        let texto = `${this.usuario.saludo()} \n`;

        //FOR PARA LISTAR PRODUCTOR
        for (let item of this.items){
            texto += ` ${item.producto.nombre} x ${item.cantidad} - ${formatearPrecio(item.producto.precio*item.cantidad)} \n`;
        }
        texto += `TOTAL: ${formatearPrecio(this.total())} `;
        return texto;
    }
}

module.exports =Carrito;