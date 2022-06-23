//const dados = require('./files/arquivo1.json')
import dados from "../files/arquivo1.json" assert { type: "json" }
let nums = []
dados.forEach(d => {
    nums.push(d.valor)
})

let numsArray = nums.filter(i => i !== 0)

const mediaMensal = array => {
    let v = 0;
    for(let i = 0; i < array.length; i++) {
        v += array[i]
    }
    return v / array.length
}

let media = mediaMensal(numsArray)

let mediaFatMensal = []
numsArray.forEach(v => {
    if(v !== 0 && v >= media){
        mediaFatMensal.push(v)
    }
})

let valorMenor = Math.min(...numsArray).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
let valorMaior = Math.max(...numsArray).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
let mediaFinal = media.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

document.getElementById('item1').innerHTML = `O menor faturamento é: <strong> ${valorMenor} </strong>`
document.getElementById('item2').innerHTML = `O maior faturamento é: <strong> ${valorMaior} </strong>`
document.getElementById('item3').innerHTML = `A média de faturamento é: <strong> ${mediaFinal} </strong>`
document.getElementById('item4').innerHTML = `Em <strong> ${mediaFatMensal.length} </strong> dias o faturamento foi superior a média mensal.`