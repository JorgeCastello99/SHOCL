/**
 * En este archivo vemos en qué se diferencia una var, de una let a una const.
 * Por lo general las variables funcionan por contexto o bloques, es decir que
 * delimitan su vida útil dentro del bloque (no función) definido entre llaves { }.
 * En el caso de var, esas llaves es como si no existieran, permitiendo definir
 * una variable dentro de bloques y luego utilizarla por fuera (insisto, no función).
 *
 * ¡Ojo! No es una sentencia prohibida pero tienes que tener cuidado para no
 * volverte loc@ luego buscando dónde está el error de definición :-)
 */

// Ejemplo función
function saludar() {
   var saludo = 'Hola Mundo'; // Hemos definido una var dentro de una función
}
console.log(saludo); // ¿Se mostrará algo?

// La variable saludo queda como variable "global" definida dentro de la función

// Ejemplo bloque
// Vamos a definir unas variables que sólo deben afectar al bloque
if (true) {
   var despedida = 'Chao!';
   let despedida2 = 'Bye!';
}
console.log(despedida);
console.log(despedida2);

// Ejemplo en bucles
for (var i = 0; i < 5; i++) {
   // Aquí deberíamos hacer algo
   // console.log(`i vale ${i}`);
}

// ¿Dará error al intentar redefinir i?
for (let i = 0; i < 10; i++) {
   // Aquí deberíamos otra cosa
   // console.log(`i vale ${i}`);
}
console.log(i); // ¿Cuánto valdrá i?

// Variables definidas por contexto de función
function decirAdios() {
   despedida = 'Adios :(';
   console.log(despedida);
   var despedida;
}
// ¿Dará error al intentar asignar la variable despedida e imprimirla?
// Realmente, de cara al JS la variable definida con "var" pasa a estar
// en la cabecera de la función
