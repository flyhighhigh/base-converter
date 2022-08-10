const dict = {
    binary:{
        func : function (str){
            for(let s of str){
                if(!(s==='0' || s==='1'))return false
            }
            return true
        },
        digit: 2
    },
    decimal:{
        func : function (str){
            return !isNaN(str)
        },
        digit: 10
    },
    hex:{
        func : function (str){
            let test = '0123456789ABCDEF'
            for(let s of str.toUpperCase()){
                if(!test.includes(s))return false
            }
            return true
        },
        digit: 16
    }
}

for(let form of forms){
    form.addEventListener('focus',()=>{
        if(form.value === 'error input'){
            form.value = ''
        }
    })
    form.addEventListener('input',(e) => {
        if(form.value.length == 0){
            for(let f of forms){
                f.value = ''
            }
        }else if(dict[form.id].func(form.value)){
            let val = parseInt(form.value,dict[form.id].digit)
            for(let f of forms){
                if(form !== f) f.value = val.toString(dict[f.id].digit)
            }
        }else{
            for(let f of forms){
                if(form !== f) f.value = 'error input'
            }
        }
    })
}
