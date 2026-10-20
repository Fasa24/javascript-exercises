const peso = 77.4;
const altura = 1.83;
const imc = calcularIMC(peso, altura);
const clasificacion = clasificarIMC(imc);

function calcularIMC(peso, altura) {
  if (typeof peso !== "number" || typeof altura !== "number" || peso <= 0 || altura <= 0) {
    return "Valores inválidos";
  }
  return peso / (altura * altura);
}

function clasificarIMC(imc) {
  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc < 25) {
    return "Normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidad";
  }
}

console.log(`IMC = ${imc}`);
console.log(`Clasificación = ${clasificacion}`);