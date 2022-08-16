const videoGames = ['PS5', 'Xbox', 'Switch'];

console.log('↓ Retorno do Array videogames');
console.log(videoGames[0]);
console.log(videoGames[2]);
console.log(videoGames.length);

/***** Métodos e propriedades de um Array *****/
console.log('↓ Retorno do .pop()');
//console.log(videoGames.pop()); // remove o último item e retorna ele

console.log('↓ Retorno do .push()');
console.log(videoGames.push('3DS')); // adiciona ao final do Array
console.log(videoGames);

/***** Foor Loop *****/
console.log('↓ Retorno do for loop');
for (let n = 0; n <= 10; n++) {
  console.log(n);
}
// Retorna de 0 a 10

/***** While Loop *****/
console.log('↓ Retorno do while loop');
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 10

/***** Arrays e Loops *****/
console.log('↓ Retorno do Array com Loop');
for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

console.log('↓ Retorno do loop e array com break');
for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === 'Xbox') {
    break;
  }
}

console.log('↓ Retorno do forEach');
videoGames.forEach(function (i) {
  console.log(i);
});
