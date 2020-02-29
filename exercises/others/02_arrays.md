# Ejercicios de Arrays

Para los alumnos/as que tengan más facilidad o experiencia, se plantea una serie de retos listado a continuación. Estos ejercicios, en su mayoría, podrán ser fácilmente localizables por internet pero se trata de no hacer trampas e intentar resolverlos lo mejor posible.

## Elemento olvidado y repetido

El ejercicio trata de encontrar un número A y otro B dentro de un array C de números enteros positivos de tal manera que A no se encuentre dentro de C y B se encuentre repetido dos veces.

```js
const unsortedArray = [43, 89, 93, 88, 54, 4, 51, 46, 47, 64, 76, 38, 90, 6, 21, 12, 62, 19, 80, 18, 35, 32, 45, 67, 78, 92, 83, 22, 30, 49, 69, 42, 98, 25, 84, 96, 36, 17, 66, 99, 44, 52, 13, 81, 77, 23, 100, 63, 40, 7, 95, 2, 71, 11, 59, 8, 74, 29, 70, 85, 72, 75, 73, 9, 41, 82, 86, 31, 34, 55, 28, 23, 94, 33, 65, 10, 91, 27, 5, 68, 1, 53, 16, 57, 48, 39, 37, 61, 97, 14, 56, 60, 58, 15, 79, 3, 87, 50, 26, 24];
```

Si necesitas crear otra lista visita [random.org](https://www.random.org/integer-sets/?sets=1&num=100&min=1&max=100&seqnos=on&commas=on&order=index&format=html&rnd=new) y recuerda eliminar un elemento, añadiendo uno repetido.

## Suma de sub-arrays

Sea un array de elementos desordenados mayores o iguales a 0, se trata de encontrar un rango (dos posiciones) de tal modo que la suma de los elementos entre esas dos posiciones sume un número X. En caso de no haber ninguna combinación debe imprimir que no existe una combinación.

Ejemplo:
```js
const unsortedArray = [3, 2, 10, 5, 7, 2, 1, 0, 4, 6, 2];
const xNumber = 11;
// La salida debería ser 6 y 9 porque la suma de los números entre ambas posiciones suma 11 => 1 + 0 + 4 + 6.

/**
 * Otros ejemplos:
 * Se quiere el 12
 * Se tiene el array 1 2 3 7 5
 *
 * Se quiere el 15
 * Se tiene el array 1 2 3 4 5 6 7 8 9 10
 */
```

## Forrest Gump 🍫

_"La vida es como una caja de bombones, nunca sabes lo que te va a tocar"_

Sea un array bidimensional A de números enteros positivos de tamaño NxN, donde cada valor representa la calidad del bombón de la casilla. El número que representa la calidad máxima no debe estar establecido, sino generado de manera dinámica y no tiene por qué ser el número mayor del array (puede coincidir o no). Cada caja puede tener un número diferente de bombones y se considera que siempre empieza llena. Se trata de localizar la posición de aquellos bombones de mejor calidad y colocarlos en otra caja para regalárselos su mejor amigo, Bubba Blue 💙.

Se pide:
1. Modelar el sistema
2. Localizar los mejores bombones, sacarlos de la caja y ponerlos en otra
3. Imprimir de manera ordenada la caja de bombones original y la nueva

## Mezcla de arrays

El problema es simple, tenemos dos arrays y tenemos que conseguir unirlos en uno nuevo teniendo en cuenta que los elementos no deben estar repetidos  al final el array debe estar ordenado.

## Número de pares

Sean dos arrays X = (x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, ...) e Y = (y<sub>1</sub>, y<sub>2</sub>, y<sub>3</sub>, ...), rellenos de números enteros positivos (diferentes, claro). Hay que encontrar los pares de tal modo que x<sup>i</sup> > y<sup>j</sup>

Ejemplo:
```js
const X = [2, 1, 6];
const Y = [1, 5];
```

Los resultados válidos serían:
- 2<sup>1</sup> > 1<sup>2</sup>
- 2<sup>5</sup> > 5<sup>2</sup>
- 6<sup>1</sup> > 1<sup>6</sup>

## El X número más pequeño

Sea un array de N elementos enteros positivos, se pide localizar el elemento X más pequeño.

Ejemplo:
```js
const unsortedArray = [4, 20, 2, 15, 5, 9, 6, 8, 1, 7, 12];
const encontrar = 3; // No el nº3 sino el tercero más pequeño
```

La salida debería ser el número: 4

Si te atreves, puedes hacerlo sin hacer uso del `sort` ;-)
