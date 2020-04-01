// pessoa -> 123 -> {...
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> [...]
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa) //DEIXA O OBJETO ESTATICO

pessoa.nome = 'Maria'
pessoa.end = 'ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'}) //JA CRIA O OBJETO ESTATICO
console.log(pessoaConstante)