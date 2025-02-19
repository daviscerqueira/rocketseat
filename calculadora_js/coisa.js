var num1 = Number(prompt('Primeiro número: '))
var num2 = Number(prompt('Segundo número: '))

alert(`A soma dos dois números é ${num1 + num2}`)
alert(`A subtração dos dois números é ${num1 - num2}`)
alert(`A multiplicação dos dois números é ${num1 * num2}`)
alert(`A divisão dos dois números é ${num1 / num2}`)
alert(`A sobra da divisão dos dois números é ${num1 % num2}`)

if ((num1 + num2) % 2 > 0){
    alert('A soma dos dois números é ímpar')
} else {
    alert('A soma dos dois números é par')
}

if (num1 == num2){
    alert('Os dois números são iguais')
} else {
    alert('Os dois números são diferentes')
}