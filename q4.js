// notas 2 , 3, 5
//pesos 1, 2 , 3 
//mp => (2*1 + 3*2 + 5*3)/(1+2+3)

let nota1= Number(prompt("digite a primeira nota: "));
let nota2= Number(prompt("digite a segunda  nota: "));
let nota3= Number(prompt("digite a terceira  nota: "));

let pesso1= Number(prompt("digite o primeiro peso: "));
let pesso2= Number(prompt("digite o segundo pesso: "));
let pesso3= Number(prompt("digite o tereceiro pesso: "));

let mp = (nota1*pesso1 + nota2*pesso2 + nota3*pesso3)/(pesso1+pesso2+pesso3);

console.log("o resultado é: " + mp );

