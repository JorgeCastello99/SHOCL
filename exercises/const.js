/**
 * Cambia las variables a constantes según consideres oportuno. También cambia
 * el nombramiento teniendo en cuenta las reglas de JS
 */

let softwareVersion = 'v0.1';
const availiblelanguages = ['es', 'en'];
let backgroundcolor = '#e0e0e0';
let language = 'es';
const coursename = 'Curso FrontEnd';
let currentLanguage = navigator.language.split('-')[0];

/**
 * Queremos incluir a nuestros vecinos de portugal en los idiomas disponibles
 * así que ¡¡vamos a modificar la variable availablelanguages!!
 */
if (!currentLanguage.includes('pt')) {
   availiblelanguages.push('pt');
}

console.log(
   `El software actual tiene una versión ${softwareVersion}, se muestra en ${backgroundcolor} y está disponible para los siguientes idiomas ${availiblelanguages}`
);
