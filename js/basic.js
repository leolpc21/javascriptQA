var userName = 'Leo'
document.getElementById('user-name').innerHTML = userName

/* 
console.log('Olá, Javascript!')

Variáveis

var nome = "Mestre Yoda"
var idade = 100
var jedi = true

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi)



Operadores

soma = +
subtração = -
multiplicação = *
divisão = /

var n1 = 5
var n2 = 5

console.log(typeof n1)
console.log(typeof n2)

var total = n1 + n2
console.log(total)

var total = n1 - n2
console.log(total)

var total = n1 * n2
console.log(total)

var total = n1 / n2
console.log(total)



Operadores de Comparação

// Igual (==)
// Retorna verdadeiro se os valores comparados forem iguais.
1 == '1' //true

// Não igual (!=)
// Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.
4 != 1 //true

// Igual estrito (===)
// Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
3 === '3' //false
3 === 3 //true

// Não igual estrito (!==)
// Esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
3 !== '3' //true
3 !== 3 //false
3 !== 4 //true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
1 > 2 //false
5 > 3 //true
4 > '1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
1 >= 2 //false
5 >= 3 //true
4 >= '1' //true
2 >= 2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro
1 < 2 //true
5 < 3 //false
4 < '1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro
1 <= 2 //true
5 <= 3 //false
4 <= '1' //false
2 <= 2 // true

var v1 = 5
var v2 = '5'

var resultado = v1 === v2
console.log(resultado)



Funções

function soma(n1, n2) {
   return n1 + n2   
}

var res = soma(1, 2)
console.log(res)

function boasVindas(nome){
  alert(nome + '!! Seja bem vindo(a)!!')
}

boasVindas('Leo')



Constrole de fluxos (BDD)

Sendo um cliente correntista do banco
Posso sacar dinheiro em caixas eletrônicos
Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

Cenário 1: Saque com sucesso
Dado que meu saldo é de 1000,00
Quando faço um saque de 500,00
Então o valor do saque deve ser deduzido do saldo

Cenário 2: Saque com valor superior ao saldo
Dado que meu saldo é de 1000,00
Quando faço um saque de 1001,00
Então não deve deduzir do meu saldo
E deve informar uma mensagem de saldo insuficiente

Cenário 3: Saque com valor máximo
Dado que meu saldo é de 1000,00
E o valor máximo por operação é de 700,00
Quando faço um saque de 701,00
Então não deve deduzir do meu saldo
E deve informar uma mensagem de valor do saque acima do permitido

var saldo = 1000

function saque(valor) {
  if (valor > saldo) {
    console.log('Valor do saldo insuficiente!!!')
  } else if (valor >= 701) {
    console.log('Valor do saque acima do permitido!!!')
  } else {
    saldo = saldo - valor
    return saldo
  }
}

saque(701)
console.log(saldo)



Arrays

var gaveteiro = [
  'Meias', 'Gravatas', 'Documentos', 'Calças', 'Camisas'
]

console.log(gaveteiro)

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

personagens.push('C3pO') // Adiciona mais um item no array
personagens.push('R2D2') // Adiciona mais um item no array
personagens.pop() // Remove o ultimo item do array
personagens = personagens.filter(function(p){
  return p !== 'Darth Vader' // Retorna sem o item específico no array
})
personagens = personagens.filter(function(p){
  return p === 'Mestre Yoda' // Retorna o item específico no array
})

console.log(personagens)



Controles de repetição (loops)

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

console.log(personagens)

personagens.forEach(function(p){
  console.log(p)
})

for (var i in personagens) {
  console.log(personagens[i]);  
}

for (let index = 0; index < personagens.length; index++) {
  console.log(personagens[index]);  
}



Objetos

var yoda = {
  nome: 'Mestre Yoda',
  idade: 100,
  jedi: true,
  mostraIdade: function(){
    console.log(`A idade do ${this.nome} é: ${this.idade}`)
  }
}

// yoda.nome = 'Mestre Yoda'
// yoda.idade = 100
// yoda.jedi = true

console.log(yoda)
yoda.mostraIdade()



Constantes

const nome = 'Darth Vader'
console.log(nome)

nome = 'Mestre Yoda' // Não é possível alterar uma constante 'const'
console.log(nome)

*/