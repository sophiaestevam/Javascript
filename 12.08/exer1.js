 let cont = prompt("qual a operação deseja realizar:  1- adição" + "2- subtração" +   "3-divisão" + "4-multiplicação")
 cont = Number

let num1 = Number(prompt("digite o primeiro numero: "))

let num2 = Number(prompt("digite o segundo numero: "))

if(cont == 1){
    let soma = num1 + num2
    console.log("O resultado é" + soma )
}


if(cont == 2){
    let subtração = num1 - num2
    console.log("O resultado é" + subtração )
}

if(cont == 3){
    if(num2 == 0){
        console.log("Não pode ser dividido por 0")
    }

    let divisão = num1/num2
    console.log("O resultado é" + divisão)
}

if(cont == 4){
    let multiplicação = num1 * num2
    console.log("O resultado é" + multiplicação )
}





