function areaQuadrado(lado) {
  return lado * lado;
}
console.log('↓ Retorno da área quadrado');
console.log(areaQuadrado(4)); //16
console.log(areaQuadrado(12)); //144

/********************************************/

function imc(peso, altura) {
  const imc = peso / altura ** 2; // ** expoente
  return imc;
}
console.log('↓ Retorno do imc');
console.log(imc(90, 1.81));
console.log(imc(65, 1.58));

/********************************************/

function corFavorita(cor) {
  if (cor === 'azul') {
    console.log('Eu gosto de azul');
  } else if (cor === 'vermelho') {
    console.log('Eu gosto de vermelho');
  } else {
    console.log('Eu não gosto de nada');
  }
}
console.log('↓ Retorno da função de cores');
corFavorita('azul');

/************** Callback => função como argunmento ****************/

console.log(`Retorno da função Callback ('clicou'), caso tenha click na tela.`);
//addEventListener é uma função nativa JS.
addEventListener('click', function () {
  console.log('clicou');
});
// a função desse Calback é mostrar no console 'clicou' quando clicar na tela.

/********** Valores retornados. Função pode retornar qualquer valor. *********/

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade.';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log('↓ Retorno da função terceira idade');
console.log(terceiraIdade(65));

/********** Escopo: variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele. ********/

// ↓ variável definida fora do bloco
const totalPaises = 193;
function paisesVisitados(paises) {
  // ↓ variável definida dentro do bloco
  // const totalPaises = 193;
  return `Falta visitar ${totalPaises - paises} países.`;
}
console.log('↓ Retorno da função total paises');
console.log(paisesVisitados(25));

/******* Escopo léxico: funçoes consegue acessar variáveis que foram criadas no contexto pai. ******/

console.log('↓ Retorno da função Dados');
const profissao = 'Programador';

function dados() {
  const nome = 'Alex';
  const idade = '30';
  function outrosDados() {
    const cidade = 'São Paulo';
    const estado = 'SP';
    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}, Estado: ${estado}`;
  }
  return outrosDados();
}
console.log(dados());
