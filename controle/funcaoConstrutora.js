function Carro(valocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidade = 0

    //metodo publico com this
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidade = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidade())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidade())