const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // mssa quebrou o carro e saiu
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //retira o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar o remover elementos

//adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a aprtir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // pega do indice 1 e vai ao indice 4 sem incluir o 4
console.log(algunsPilotos2)

