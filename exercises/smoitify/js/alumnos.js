/**
 * La clase Song representa una canción (oh, sorpresa). Cada canción tiene, al menos
 * un álbum (album), un año (year), un artista (artist), un título (title), una imágen
 * (art) y una url (url) para reproducir el mp3.
 *
 * Nivel fácil: Incluir artista y Álbum en la clase Song
 * Nivel medio: Crear las clases para artista y álbum haciendo uso de getters para mantener los "atributos" artist y album
 * Nivel hard: Añade
 *
 * No sé si faltará alguna clase por crear...
 */
class Song {}
/**
 * La clase PlayList representa una lista de reproducción, compuesta por varias canciones.
 * Esta lista debe tener un título (title) que la identifique como, por ejemplo, "las mejores canciones
 * para programar en JS sin volverse loc@" o "la pizza con piña mola mogollón" y un listado de canciones (songs)
 *
 * Importante! La clase PlayList debe almacenar el orden de las canciones en un campo "id".
 * El orden debe ser numérico y según orden de llegada. NO poner de forma manual :D
 *
 * Recuerda, el "..." representa argumentos "infinitos"
 * PlayList('La pizza con piña', cancion1, cancion2, cancion3, etc.)
 *
 * Para el modo medio:
 * Añadir un campo hash que se componga de una almohadilla (hashtag) seguido de la primera o dos palabras del nombre del artista
 * primera palabra del nombre de la canción y el año. Todo en minúscula.
 * Ej: #elfarytorito1992
 *
 * Para el modo dificil:
 * Debes incluir un atributo / getter / algo llamado "info" que contenga la información de cuántos likes
 * le han dado los usuarios a una canción. Esto podría implicar crear otra/s clases y modificar alguna
 * existente. ¿Te atreves? 😈
 */
class PlayList {}

/*
 * ¿Crear canciones aquí?
 * const song1 = ...
 */

// Debes rellenar la siguiente constante con una lista de canciones
const playList = new PlayList();

/*
 * -------------------------------------------------------------------
 * Esta línea no se toca, caca 💩
 */
export { playList };
