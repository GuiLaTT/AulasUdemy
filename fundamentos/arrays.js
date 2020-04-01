const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //ERRO UNDEFINED 

valores[4] = 10
console.log(valores[4])// da para adicionar elementos no array
console.log(valores.length)// diz quantos elementos existe no array

valores.push({id: 3}, false,null, 'teste')//ARRAY HETEROGENO
console.log(valores)

console.log(valores.pop())//retira o ultimo valor do array
delete valores[0]//retira o elemento do vetor
console.log(valores)

console.log(typeof valores)//tipo do array