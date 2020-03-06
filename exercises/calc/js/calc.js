function clickButton() {
   // No tocar las próximas constantes
   const buttonId = arguments[0].toElement.id; // No toquen esta línea :-)
   const value = document.getElementById(buttonId).innerText; // Valor

   // Tu código empieza aquí
   const resultado = document.getElementById('resultado');
   resultado.innerHTML = value;

   if (operador == '') {
      acumulador = parseFloat(value);
      console.log('No hay nada que operar aún');
   } else {
      switch (operador) {
         case '+':
            acumulador += parseFloat(value);
            value.innerHTML = acumulador;
            break;
         default:
            console.log('wtf');
            break;
      }
   }
}

// Valores
operador = '';
acumulador = 0.0;

// Botones
const boton1 = document.getElementById('n1');
boton1.addEventListener('click', clickButton);
const boton2 = document.getElementById('n2');
boton2.addEventListener('click', clickButton);
const boton3 = document.getElementById('n3');
boton3.addEventListener('click', clickButton);
const boton4 = document.getElementById('n4');
boton4.addEventListener('click', clickButton);
const boton5 = document.getElementById('n5');
boton5.addEventListener('click', clickButton);
const boton6 = document.getElementById('n6');
boton6.addEventListener('click', clickButton);
const boton7 = document.getElementById('n7');
boton7.addEventListener('click', clickButton);
const boton8 = document.getElementById('n8');
boton8.addEventListener('click', clickButton);
const boton9 = document.getElementById('n9');
boton9.addEventListener('click', clickButton);
const boton0 = document.getElementById('n0');
boton0.addEventListener('click', clickButton);

// Operaciones
const botonSuma = document.getElementById('opSuma').addEventListener('click', () => {
   this.operador = '+';
   console.log('Cambiando a modo suma');
});

const botonIgual = document.getElementById('opIgual').addEventListener('click', () => {
   this.operador = '=';
   console.log('Imprimimos resultado');
   this.resultado.innerHTML = this.acumulador;
});
