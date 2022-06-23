const isFibonacci = num => {
    if(!isNaN(num)){
        return new Promise((resolve, reject) => {
            let fb1 = 0
            let fb2 = 1
            let resultFb = 0
            while(resultFb < 1000000){
                resultFb = fb1 + fb2
                fb1 = fb2
                fb2 = resultFb
                console.log(resultFb)
                if(num == resultFb){
                    resolve(num)
                    break
                }else if(num < resultFb){
                    reject(num)
                    break
                }
            }
        })
    }else{
        location.reload()
    }
    
}

let btnFb = document.getElementById('btnFb')
function clearField(){
    document.getElementById('valueFb').value = ''
}

btnFb.addEventListener('click', () => {
    let valueFb = document.getElementById('valueFb')
    isFibonacci(valueFb.value)
    .then(v => {
        document.getElementById('resultFb').innerHTML = `<strong>SIM</strong>`
        clearField()
    })
    .catch(e => {
        document.getElementById('resultFb').innerHTML = `<strong>NÃO</strong>`
        clearField()
    })
})

