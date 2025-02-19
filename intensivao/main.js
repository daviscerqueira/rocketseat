alert("Hello World!")

let num1 = Math.floor(Math.random() * 15)
let num2 = Math.floor(Math.random() * 15)

alert(`${num1} + ${num2} = ${num1 + num2}`)

let list = ["a",1, false]
let index = list[Math.floor(Math.random() * 3)]

alert(typeof(index) == typeof(1) ? `"${index}" É um número` : `"${index}" Não é um número`)
alert(typeof(index) == typeof('a') ? `"${index}" É uma string` : `"${index}" Não é uma string`)
alert(typeof(index) == typeof(true) ? `"${index}" É uma boolean` : `"${index}" Não é uma boolean`)

alert(`${num1} - ${num2} = ${num1 - num2}`)
alert(`${num1} * ${num2} = ${num1 * num2}`)
alert(`${num1} / ${num2} = ${num1 / num2}`)

alert((num1 % 2) != 0 ? `${num1} É um número ímpar` : `${num1} É um número par`)