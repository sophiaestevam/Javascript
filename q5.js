// peca o usuario idade em anos 
//converta para meses e dias 

let idade = Number(prompt("digite sua idade em anos: "));

let meses = (idade * 12);
let dias = (idade * 365);

console.log("Voce tem: "+ meses + " meses de vida");
console.log("Voce tem: "+ dias + " dias de vida");