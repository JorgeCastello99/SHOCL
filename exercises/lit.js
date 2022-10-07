/*
 * No descomentar la siguiente línea :-)
 * prettier-ignore
 */
const WORDS = [
   'abre',
   'allo',
   'amas',
   'amen',
   'ames',
   'ampo',
   'ando',
   'anos',
   'anuo',
   'aoja',
   'aojo',
   'aran',
   'aras',
   'arda',
   'ardo',
   'aren',
   'ares',
   'ario',
   'arma',
   'asan',
   'asas',
   'asen',
   'aseo',
   'ases',
   'asia',
   'atas',
   'ates',
   'auno',
   'aves',
   'ayas',
   'baga',
   'bala',
   'bañe',
   'bisa',
   'boas',
   'boba',
   'boja',
   'bojo',
   'bosa',
   'bota',
   'bote',
   'boto',
   'boya',
   'boyo',
   'cace',
   'caen',
   'caer',
   'calo',
   'case',
   'cave',
   'cayo',
   'cedo',
   'cefo',
   'ceno',
   'cesa',
   'chad',
   'coge',
   'coja',
   'cojo',
   'come',
   'crea',
   'cree',
   'cuba',
   'dañe',
   'deja',
   'dias',
   'dijo',
   'dime',
   'dome',
   'dora',
   'dore',
   'duos',
   'dura',
   'echa',
   'echo',
   'ecos',
   'emes',
   'emus',
   'enes',
   'eñes',
   'enya',
   'eran',
   'eras',
   'eres',
   'esas',
   'eses',
   'fico',
   'fumo',
   'gato',
   'goda',
   'guam',
   'hace',
   'haga',
   'hago',
   'hala',
   'hara',
   'hare',
   'haya',
   'hice',
   'hile',
   'hube',
   'hubo',
   'huna',
   'huya',
   'iban',
   'ibas',
   'ices',
   'idas',
   'idos',
   'iran',
   'iras',
   'iria',
   'izas',
   'jade',
   'jugo',
   'kiev',
   'lami',
   'lave',
   'lees',
   'lega',
   'leia',
   'lima',
   'loas',
   'luca',
   'lusa',
   'mala',
   'mali',
   'mece',
   'medi',
   'mees',
   'mesa',
   'mese',
   'meso',
   'meto',
   'mide',
   'moja',
   'mojo',
   'mola',
   'moño',
   'more',
   'moza',
   'muca',
   'nace',
   'ndea',
   'niue',
   'note',
   'nuda',
   'nuez',
   'nula',
   'odas',
   'ojos',
   'olas',
   'Oman',
   'oras',
   'oren',
   'ores',
   'orno',
   'orzo',
]; // eslint-disable-line no-use-before-define
const WORD_SIZE = 4;
const colors = require('colors');
const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});

// Tu código empieza aquí
function randomIntBetween(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateRandomWord() {
   return WORDS[randomIntBetween(0, WORDS.length - 1)];
}

function compareLetters(word, randomWord) {
   const green = [];
   const yellow = [];
   for (let i = 0; i < WORD_SIZE; i++) {
      for (let j = 0; j < WORD_SIZE; j++) {
         if (word[i] === randomWord[j]) {
            if (i === j) {
               green.push(i);
               randomWord.slice(i, i + 1);
            } else {
               yellow.push(i);
               randomWord.slice(i, i + 1);
            }
         }
      }
   }

   return [green, yellow];
}

function printWord(greenIndex, yellowIndex, word) {
   let letra = '';
   for (let i = 0; i < word.length; i++) {
      if (greenIndex.includes(i)) {
         letra += word[i].green;
      } else if (yellowIndex.includes(i)) {
         letra += word[i].yellow;
      } else {
         letra += word[i];
      }
   }
   return letra;
}

const randomWord = generateRandomWord();

console.log(randomWord);
let intentos = 0;
const recursiveAsyncReadLine = function() {
   readline.question(`Palabra de 4 letras (intento: ${intentos + 1}): `, function(word) {
      const [greenIndex, yellowIndex] = compareLetters(word, randomWord);
      const wordColoured = printWord(greenIndex, yellowIndex, word);
      console.log(wordColoured);
      intentos++;
      if (intentos == 6) return readline.close();
      console.log(`Has introducido ${word}`);
      recursiveAsyncReadLine();
   });
};

recursiveAsyncReadLine();
