/*3.- Cuenta cuantas veces se repite un caracter en especifico (20 ptos).
Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
veces se repite un carácter dado en dicha cadena de texto.
Ejemplo la cadena dada es “hola como estas” y el carácter dado para saber cuantas
veces se repite es “o” entonces la consola debería de mostrar: el carácter “o” se repite 3
veces en “hola como estas”.*/


let valor = contcaract('hola como estas','o');
console.log(valor);
function contcaract (str,rep){

//var cadena = "Cuantas 'A' aparecen en esta cadena."
var cadena = str;
var cursor = [];
for(var i = 0; i < cadena.length; i++) {
	if (cadena[i].toLowerCase() === rep) cursor.push(i);
}
  return console.log("El caracter " + '"' + rep + '"' + " se repite " + cursor.length + " veces " + " en la cadena " + '"' + str + '"');
}


//  5.- Nuevos jugadores (50 ptos).
//Clase persona con propiedades nombre, apellido y edad
class Persona {
    nombre;
    apellido;
    edad;
    constructor (nombre,apellido,edad){
     this.nombre = nombre;
     this.apellido = apellido;
     this.edad = edad;
    }

    getDatalle (){
      console.log(this.nombre);
      console.log(this.apellido);
      console.log(this.edad);
    }
}
class Jugador extends Persona{
     posicion;
     constructor (nombre,apellido,edad,posicion){
         super(nombre,apellido,edad);
         this.posicion = posicion;
     }
     getDetalle (){
        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.edad);
        console.log(this.posicion);
     }
   } 

   class Entrenador extends Persona{
    experiencia;
    idfederacion;
    constructor (nombre,apellido,edad,experiencia,idfed = Math.floor(Math.random() * 90000) + 10000){
        super(nombre,apellido,edad);
        this.experiencia = experiencia;
        this.idfederacion = idfed;
    }
    getDetalle (){
       console.log(this.nombre);
       console.log(this.apellido);
       console.log(this.edad);
       console.log(this.posicion);
       console.log(this.experiencia);
       console.log(this.idfederacion);
    }
   }
    
   class Equipo {
        director;
        jugadores=[];
           constructor (director,jugadores) {
            this.director = director;
            this.jugadores = jugadores;
        }
        getDetalles() {
            console.log(this.director);
            console.log(this.jugadores);
        }

        addJuagadores(jugadores) {
                this.jugadores.push(jugadores);
            }

        }
  
const Ana = new Jugador('Ana','Restrepo',35,'Portero');
console.log(Ana);
const Maria = new Jugador('Maria','Toro',20,'Defensa');
console.log(Maria);
const Monica = new Jugador('Monica','Perez',30,'Medio');
console.log(Monica);
const Sandra = new Jugador('Sandra','Arango', 40,'Delantero');
console.log(Sandra);
const Mario = new Entrenador('Mario','Ramirez', 31,10);
console.log(Mario);

const Equipo1 = new Equipo(Mario, Array(Ana, Maria,Monica,Sandra));
console.log(Equipo1);

Equipo1.addJuagadores(Ana, Maria, Monica, Sandra);

Ana.getDatalle();
Mario.getDatalle();
Equipo1.getDetalles(Equipo1);


