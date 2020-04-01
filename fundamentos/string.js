const escola = 'coder'

console.log(escola.charAt(4)) //devolve o indice da string
console.log(escola.charAt(5)) //vazio
console.log(escola.charCodeAt(3)) //tabelas asc unicode

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) //retorna as ultimas string

console.log('Escola '.concat(escola).concat("!")) //concatenar
console.log(escola.replace(3, 'e')) //substitui todos 3 por e  /\e/  -- expressao regular

console.log('Ana,Maria,Pedro'.split(',')) //gera array com , como separador

