//USUARIO

class Usuario {
    constructor(nombre, email, esvIP) {
        this.nombre = nombre; 
        this.email =email ;
        this.esVip =esVip ;

    }

    saludo(){
        return `Hola ${this.nombre}`
    }
}

module.exports = Usuario; 