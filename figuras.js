// Debemos calcular el perimetro y área de un cuadrado,
// triangulo y circulo.

// Cuadrado
function perimetroCuadrado(lado) {  
    return lado * 4;
}
function areaCuadrado(lado) {
     return lado * lado;
 }

 // Triangulo
function perimetroTriangulo(lado, lado, base) {
     return lado1 + lado2 + base;
 }

function areaTriangulo(base, altura) {
     return (base * altura) / 2;
 }

 // Circulo
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
 }

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

// Aquí interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}