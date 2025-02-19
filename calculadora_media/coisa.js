const estudantes = [
    {
        nome: "Tiago",
        nota1: Math.floor(Math.random()*10),
        nota2: Math.floor(Math.random()*10),
        nota3: Math.floor(Math.random()*10)
    },
    {
        nome: "Levi",
        nota1: Math.floor(Math.random()*10),
        nota2: Math.floor(Math.random()*10),
        nota3: Math.floor(Math.random()*10)
    },
    {
        nome: "Lucas",
        nota1: Math.floor(Math.random()*10),
        nota2: Math.floor(Math.random()*10),
        nota3: Math.floor(Math.random()*10)
    },
    {
        nome: "Gabriel",
        nota1: Math.floor(Math.random()*10),
        nota2: Math.floor(Math.random()*10),
        nota3: Math.floor(Math.random()*10)
    }
]

for (let i = 0; i < estudantes.length; i++){
    let média = ((estudantes[i].nota1 + estudantes[i].nota2 + estudantes[i].nota3) / 3).toFixed(1)
    if (média >= 7){
        alert(`Parabéns ${estudantes[i].nome}!\n Você passou com uma média de ${média}`)
    } else {
        alert(`Que pena, parece que não foi dessa vez ${estudantes[i].nome}.\n Sua média foi de ${média}`)
    }
}