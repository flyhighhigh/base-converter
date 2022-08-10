// console.log('hello world')

const binary = document.getElementById('binary')
const demical = document.getElementById('demical')
const hex = document.getElementById('hex')

function isBinary(str){
    for(let s of str){
        if(s==='0' || s==='1')continue
        else return false
    }
    return true
}
function isHex(str){
    let test = '0123456789ABCDEF'
    for(let s of str.toUpperCase()){
        if(test.includes(s))continue
        else return false
    }
    return true
}

binary.addEventListener('input',(e) => {
    if(binary.value.length == 0){
        demical.value = hex.value = ''
    }else if(isBinary(binary.value)){
        let val = parseInt(binary.value,2)
        demical.value = val
        hex.value = val.toString(16)
    }else{
        demical.value = hex.value = 'error input'
    }
})

demical.addEventListener('input',(e) => {
    if(demical.value.length == 0){
        binary.value = hex.value = ''
    }else if(!isNaN(demical.value)){
        let val = parseInt(demical.value)
        binary.value = val.toString(2)
        hex.value = val.toString(16)
    }else{
        binary.value = hex.value = 'error input'
    }
})

hex.addEventListener('input',(e) => {
    if(hex.value.length == 0){
        demical.value = binary.value = ''
    }else if(isHex(hex.value)){
        let val = parseInt(hex.value,16)
        demical.value = val
        binary.value = val.toString(2)
    }else{
        demical.value = binary.value = 'error input'
    }
})
