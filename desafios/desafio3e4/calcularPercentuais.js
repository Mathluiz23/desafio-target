import faturamentoPorEstado from "./faturamentoPorEstado.js";

function calcularPercentuais(faturamento) {
  const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
  const percentuais = {};

  for (const [estado, valor] of Object.entries(faturamento)) {
    percentuais[estado] = ((valor / total) * 100).toFixed(2);
  }

  return percentuais;
}

const percentuais = calcularPercentuais(faturamentoPorEstado);
console.log("Percentual de representação por estado:");
for (const [estado, percentual] of Object.entries(percentuais)) {
  console.log(`${estado}: ${percentual}%`);
}
