const pessoa = {
  nome: 'Alex',
  idade: 30,
  profissao: 'Programador',
  possuiFaculdade: false,
};
console.log('↓ Retorno da função pessoa');
console.log(pessoa);
console.log(pessoa.profissao);

/**** Métodos: uma propriedade que possui uma função no local do seu valor ****/

const quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};
console.log('↓ Retorno da função quadrado');
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

const cachorro = {
  raca: 'labrador',
  cor: 'Preto',
  idade: 5,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  },
};
console.log('↓ Retorno da função cachorro');
console.log(cachorro.latir('homem'));
