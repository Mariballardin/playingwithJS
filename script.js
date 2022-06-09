
let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

if (firstNumber === secondNumber) {
  alert("Ambos os números são iguais! Faltou criatividade, xovem?")
}

let total = (Number(firstNumber) + Number(secondNumber)) % 2;

if (total == 0) {
alert("Bom, primeira coisa que posso te dizer é que a soma dos dois números é um valor par..")
}
else {
  alert("Eu já vi que a soma dos números é um valor ímpar... vamos seguir com mais informações!")
}




let soma = Number(firstNumber) + Number(secondNumber) 
let sub = Number(firstNumber) - Number(secondNumber) 
let multi = Number(firstNumber) * Number(secondNumber)
let div = (Number(firstNumber) / Number(secondNumber)).toFixed(2)
let rest = Number(firstNumber) % Number(secondNumber)

alert("A soma dos números é: " + soma )
alert("A subtração do primeiro pelo segundo é: " + sub )
alert("A multiplicação entre eles é: " + multi )
alert("A divisão do primeiro pelo segundo é: " + div )
alert("O resto da divisão do primeiro pelo segundo número é: " + rest )


alert("Obrigada!")