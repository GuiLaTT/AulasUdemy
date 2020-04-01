const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas1 = []
for (let i in notas){
    if (notas < 7){
        notasBaixas1.oush(notas[i])
    }
}

console.log(notasBaixas1)

//com callback

const notasBaixas2 = notas.filter(function (nota){ //retorna falso ou verdadeiro
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7) //arrowfunction
console.log(notasBaixas3)
   
