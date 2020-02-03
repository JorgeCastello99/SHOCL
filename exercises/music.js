/**
 * En música, la escala de Do Mayor se compone de doce notas Do, Do#, Re, Re#,
 * Mi, Fa, Fa#, Sol, Sol#, La, La# y Si
 * Un semitono es la distancia que separa dos notas contíguas (por ejemplo Re#
 * y Mi o Sol y Sol#)
 * Si tomamos cualquiera de las notas (por ejemplo Mi) y le sumamos 5 semitonos,
 * dará como resultado un La. Si tomamos La y le sumamos la misma distancia,
 * nos dará Re porque las notas continúan tanto por arriba como por abajo.
 *
 * Se pide imprimir las notas de la canción cumpleaños feliz, almacenada en la
 * constante happyBirthday de acuerdo al cambio en semitonos
 */

// Notas escala de Do Mayor
// prettier-ignore
const notas = ['do', 'do#', 're', 're#', 'mi', 'mi#', 'fa', 'fa#', 'sol', 'sol#', 'la', 'la#', 'si'];
const numSemitonos = 5;

// prettier-ignore
const happyBirthday = [
  'sol',        're',
  // Cumpleaños feliz
  're',         'sol',
  // Cumpleaños feliz
  'sol',        'do',
  // Te deseamos todos
  'sol',       're', 'sol',
  // Cumpleaños feliz
];

// Aquí empieza tu código
