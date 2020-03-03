var print = function(string) {
   console.log(string);
};
function hanoiMem(disco, src, aux, dst) {
   if (disco > 0) {
      hanoiMem(disco - 1, src, dst, aux);
      print(`Mover disco ${disco} desde ${src} hasta ${dst}`);
      hanoiMem(disco - 1, aux, src, dst);
   }
}

hanoiMem(3, 'a', 'b', 'c');
