//Punto 1:  Colocar las condiciones necesarias para que se cumpla la salida en consola. (10 pts)

var numero1 = 5;
var numero2 = 8;
if(numero1 < numero2) {
console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
console.log("numero2 es positivo");
}
if(numero1 < 0 ) {
console.log("numero1 es negativo o distinto de cero");
}
if((numero1+=1) <= numero2) {
    console.log(numero1+=1);
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor igual que numero2");
}

/* Punto 2: El factorial de un número entero n es una operación matemática que consiste en
multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5
(escrito como 5!) es igual a 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura crear un script que calcule la factorial de un número entero.
(10 pts)*/

let nrofactorial = 5;
let valorfactorial = 1;
for (let fact = 1; fact <= nrofactorial; fact++) 
{
    valorfactorial *= fact;
}
console.log(valorfactorial)

/* Punto 3:
Escribir el código de una función a la que se pasa como parámetro un número entero
y devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función. (20 pts)*/

function validaparoimpar(numero)
{
    if (numero%2 === 0){
      return (console.log("Es un número par"))
    }else
      return (console.log("Es un número impar"))
}

let respuesta = validaparoimpar(0);

/*Punto 4: Definir una función determine si la cadena de texto que se le pasa como parámetro
es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la
derecha. Ejemplo de palíndromo complejo: “La ruta nos aporto otro paso natural”. (10
pts)  */

//function palindromo (cadenadetexto)
//{
//cadena2 = "La ruta nos aporto otro paso natural";
//console.log(cadena2);
//}

/*Punto 5: Definir la siguiente jerarquía de objetos: (50 pts) */

// 1. Clase Persona con las propiedades nombre y edad
class Persona 
{
    // propiedades de la clase Persona
        nombre;
        edad
    // Inicializa las propiedades en el constructor de la clase Persona
        constructor(nombre, edad) 
        {
            this.nombre = nombre;
            this.edad = edad;
        }
    //Crear el método obtDetalles() este método imprimirá en consola todos 
    //los atributos de la persona
        obtDetalles(nombre,edad)
        {
           return console.log(this.nombre , this.edad);
        }
}
class Estudiante extends Persona
 {
    // propiedades de la clase Persona	
        calificacion = 0;
    // Inicializa las propiedades en el constructor de la clase Autor
     
    constructor(nombre, edad, calificacion)
     {
         super(nombre, edad); // invocar el constructor de Persona usando la palabra super
         this.calificacion = this.calificacion;
     }
     obtDetallesestudiante(nombre,edad,calificacion)
     {
                    return console.log(this.nombre , this.edad , this.calificacion);
     }
}
class Profesor extends Persona
 {
    asignatura ;
    nivel
    constructor (asignatura,nivel)
    {
     super(nombre,edad);   
     this.asignatura = JS;
     this.nivel = basico;
    }
    obtDetallesprofesor(nombre,edad,asignatura,nivel)
     {
                    return console.log(this.nombre , this.edad , this.asignatura,this.nivel);
     }
 }
 class  Grupo {
     profesor;
     promedio = 0;
     estudiantes=[]; 
// Inicializa las propiedades en el constructor de la clase Grupo	
    constructor(profesor,estudiantes) {
        for (let j = 0; j < estudiantes.length; j++) {
            this.estudiantes.push(estudiantes[j])
        }
    }
//Crear el metodo calificar
 //   calificar(estudiantes){
 //   calificacion = Math.random() * 10;
 //   this.estudienates.push(estudiantes,calificacion);
 //   }

/*Crear el metodo promedio
    promedio(estudiantes){
        for (let j = 0; j < estudiantes.length; j++) {
            conthis.estudiantes.push(estudiantes[j])
        }
        console.log(this.#users);
    }
}
*/
 }
// Instanciamos la clase Estudiantes en la const per1
//const per1 = new Estudiante('nm@gmail.com', 'password ');