const filme1 = {}
const filme2 = {}


const nomef = prompt("Qual o nome do primeiro  filme: ");
const notaf = Number(prompt("Qual a nota do primeiro filme: "));

const nomef2 = prompt("Qual o nome do segundo filme: ");
const notaf2= Number(prompt("Qual a nota do segundo filme: "));


filme1.nome = nomef;
filme1.nota = notaf;

filme2.nome = nomef2;
filme2.nota = notaf2;


console.log(filme1)
console.log(filme2);

if( filme1.nota > filme2.nota){
    console.log("O Primeiro filme possui a nota maior");
}

else if(filme2.nota > filme1.nota){
    console.log("O segundo  filme possui a maior nota");
}


