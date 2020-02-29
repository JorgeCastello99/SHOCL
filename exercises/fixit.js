/**
 * En matemáticas, un número primo es un número natural mayor que 1 que tiene
 * únicamente dos divisores distintos: él mismo y el 1​. Por el contrario, los
 * números compuestos son los números naturales que tienen algún divisor
 * natural aparte de sí mismos y del 1, y, por lo tanto, pueden factorizarse.
 * El número 1, por convenio, no se considera ni primo ni compuesto.
 *
 * Fuente: Wikipedia
 */

function primesTo(n) {
   if (n < 0) {
      console.log('No hay primos negativos');
   } else if (n === 1) {
      console.log('1 no es primo');
   } else if (n === 2) {
      console.log('2 sí es primo :-)');
   }

   for (let i = 3; i < n; i++) {
      let esPrimo = true;
      let j = 0;
      for (j = 2; j < i; ++j) {
         if (i % j === 0) {
            esPrimo = false;
            break;
         }
      }

      if (esPrimo === false) {
         console.log(`¡${i} no es primo porque es divisible por ${j}`);
         esPrimo = true;
      } else {
         console.log(`¡El número ${i} es primo! :-)`);
      }
   }
}
