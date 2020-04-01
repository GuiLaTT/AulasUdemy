//Closure é o escopo criando quando uma função é declarada
//Esse escopo permite a função acessar e manipular variaves externas as funções

//Contexto lexico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())