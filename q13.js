let distancia = Number(prompt("Digite a distância da viagem (km):"));
let velocidadeMedia = Number(prompt("Digite a velocidade média (km/h):"));
let precoCombustivel = Number(prompt("Digite o preço do litro de combustível:"));
let consumoCarro = Number(prompt("Digite o consumo do carro (km por litro):"));

let tempoViagem = distancia / velocidadeMedia;
let litrosConsumidos = distancia / consumoCarro;
let custoTotal = litrosConsumidos * precoCombustivel;

console.log("Tempo de viagem: " + tempoViagem + " horas");
console.log("Litros consumidos: " + litrosConsumidos);
console.log("Custo estimado: R$ " + custoTotal);
