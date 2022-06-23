let str = 'markys correa'

const inverterString = str => {
    let v = '';
    for (let i = str.length - 1; i >= 0; i--) {
        v += str[i]
    }
    return v
}

let btnStr = document.getElementById('btnStr')
btnStr.addEventListener('click', () => {
    let valueStr = document.getElementById('valueStr')
    let result = inverterString(valueStr.value)
    document.getElementById('resultStr').innerHTML = result
    valueStr.value = ''
})