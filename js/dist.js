const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53

let total = sp + rj + mg + es + outros
let totalFinal = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

document.getElementById('itemDist1').innerHTML = `O valor total de faturamento mensal foi R$ <strong> ${totalFinal} </strong> `
document.getElementById('itemDist2').innerHTML = `SP teve <strong> ${(sp / total).toFixed(2).replace('0.', '')}%  </strong> do faturamento total.`
document.getElementById('itemDist3').innerHTML = `RJ teve <strong> ${(rj / total).toFixed(2).replace('0.', '')}%  </strong> do faturamento total.`
document.getElementById('itemDist4').innerHTML = `MG teve <strong> ${(mg / total).toFixed(2).replace('0.', '')}%  </strong> do faturamento total.`
document.getElementById('itemDist5').innerHTML = `ES teve <strong> ${(es / total).toFixed(2).replace('0.', '')}%  </strong> do faturamento total.`
document.getElementById('itemDist6').innerHTML = `Outros estados tiveram <strong> ${(outros / total).toFixed(2).replace('0.', '')}% </strong> do faturamento total.`

