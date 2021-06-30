// Debemos calcular el perimetro y área de un cuadrado,
// triangulo y circulo.

//Aqui definimos las funciones que usaremos para resolver los problemas
//Cuadrado
function perimetroCuadrado(lado) {  
    return lado * 4;
}
function areaCuadrado(lado) {
     return lado * lado;
 }

 // Triangulo
function perimetroTriangulo(lado1, lado2, base) {
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
//Triangulo
function calcularPerimetroTriangulo() {
    const inputT = document.getElementById("inputTrianguloA");
    const inputT1 = document.getElementById("inputTrianguloB");
    const inputT2 = document.getElementById("inputTrianguloBase");

    const valueT = parseFloat(inputT.value);
    const valueT1 = parseFloat(inputT1.value);
    const valueT2 = parseFloat(inputT2.value);

    
    const perimetroT = perimetroTriangulo(valueT, valueT1, valueT2)
    alert(perimetroT)
}
function calcularAreaTriangulo() {
    const inputTB = document.getElementById("inputTrianguloBase");
    const inputTA = document.getElementById("inputTrianguloAltura");

    const valueTB = parseFloat(inputTB.value);
    const valueTA = parseFloat(inputTA.value);

    const areaT = areaTriangulo(valueTA, valueTB)
    alert(areaT)
}
//Circulo
function calcularPerimetroCirculo() {
    const inputC = document.getElementById("inputCirculo");
    const valueC = parseFloat(inputC.value);
    
    const perimetroC = perimetroCirculo(valueC);
    alert(perimetroC);
}
  function calcularAreaCirculo() {
    const inputAC = document.getElementById("inputCirculo");
    const valueAC = parseFloat(inputAC.value);
  
    const areaC = areaCirculo(valueAC);
    alert(areaC);
  }
