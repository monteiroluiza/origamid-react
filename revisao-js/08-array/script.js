const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

const precosFiltro = precos.filter((item) => item.includes("R$"));
console.log(precosFiltro);

const precosNumero = precosFiltro.map((item) => Number(item.replace("R$ ", "")));
console.log(precosNumero);

const total = precosNumero.reduce((anterior, atual) => anterior + atual);
console.log(total);
