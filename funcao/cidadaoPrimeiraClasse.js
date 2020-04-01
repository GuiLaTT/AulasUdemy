//Funcao em js é first-class object (citizens)


function fun1(){

}

//armazenar em uma variavel

const fun2 = function(){}

//armazena em array

const array = [function(a, b) { return a + b}, fun1, fun2]

console.log(array[0](2, 3))

// armazenar em um atributo dfe objeto

const obj = {}
obj.falar = function (){return 'Opa'}
console.log(obj.falar())

//passar funcao como parametro

function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

// uma funcao pode retornar/conter uma funcao

function soma(a,b){
    return function(c){
        console.log(a +b +c )
    }
}

soma (2, 3)(4)

const cincomais = soma(2,3)
ci