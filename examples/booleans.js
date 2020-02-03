/**
 * Los tipos booleanos no tienen mucho misterio ni tampoco métodos
 * Una condición es verdadera o falsa, sin más
 */

// Creamos un booleano asignado a true
const miBooleano = true;

console.log(miBooleano.valueOf()); // Devuelve el valor (true)
console.log((23 > 6).toString()); // Evalúa la condición y devuelve true

/**
 * También se puede crear mediante la clase Boolean
 * new Boolean(''); // false
 * new Boolean(0); // false
 * new Boolean(undefined); // false
 * new Boolean(null); // false
 * new Boolean(NaN); // false
 * new Boolean('some text'); // true
 * new Boolean(1); // true
 */
