import dadosFaturamento from './dadosFaturamento.js';

function calcularFaturamento(dados) {
  const valores = dados.map(item => item.valor).filter(valor => valor > 0);
  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);
  const mediaMensal = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;
  const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia
  };
}

const resultados = calcularFaturamento(dadosFaturamento);
console.log(`Menor valor de faturamento: R$${resultados.menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${resultados.maiorValor.toFixed(2)}`);
console.log(`Número de dias acima da média: ${resultados.diasAcimaDaMedia}`);
