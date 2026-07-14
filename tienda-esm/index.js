//index 

import Producto from "./producto.js";
import Usuario from "./usuario.js";
import Carrito from "./carrito.js";
import {esEmailValido} from "./utilidades.js";

//CREACION USUARIO PUNTO 1
const user1 =new Usuario("Carol ", "caroll@gmail.com", true)

console.log(user1.saludo());

//VALIDAR EMAIL PUNTO 2
console.log("Es el correo ingresado si corresponde a un correo?" ,esEmailValido(user1.email));

//CREAR PRODUCTOS PUNTO 3
let p1=new Producto("Crema antimanchas", 50000 , "Skincare",5)
let p2=new Producto("Crema para acne", 60000 , "Skincare",4)
let p3=new Producto("Crema para ojeras", 70000 , "Skincare",2)


//CREAR CARRITO PARA USUARIO PUNTO 4
let carrito1 =new Carrito(user1)
//AGREGAR PRODUCTOS PUNTO 5
carrito1.agregar(p1,2)
carrito1.agregar(p1,2)
carrito1.agregar(p3,3) //SIN STOCK

//RECIBO FINAL punto 6
console.log(carrito1.recibo());