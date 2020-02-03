/**
 * Para ilustrar el ejemplo de los strings, partamos con el ilustre hidalgo
 * Don Quijote de La Mancha
 */
const inicioQuijote =
   'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.';

// Método split (separa)
console.log(inicioQuijote.split(' '));

// Método concat (concatena)
console.log('Hola'.concat('Mundo'));

// Método substr (devuelve un segmento de la cadena)
console.log('Hola Mundo'.substr(1, 2)); // Desde la posición 0 y avanza 4 (Hola)

// El método indexOf devuelve la posición si se encuentra el resultado
console.log('Hola Mundo'.indexOf('un'));

// Slice parte la string en tantos trozos como digas
console.log('Hola Mundo'.slice(1));

// Pasa a mayusculas todo
console.log('Hola'.toUpperCase());

// Reemplaza caracteres
console.log('Hola'.replace('a', 'iii'));
