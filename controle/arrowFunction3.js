let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global) //true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //false porque pelo bind agora ele aponta para o obj
comparaComThis(obj) //true porque agora ele aponta para o obj

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //false porque aponta para o modulo anterior e nao o global
comparaComThisArrow(module.exports) //true porque aponta para o modulo o qual a funcção esta criada


comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false porque o bin nao sobreescreve a arrow function
comparaComThisArrow(module.exports)

