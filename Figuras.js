console.log("hello world");


// CODIGO CUADRADO

console.group("Cuadrado"); // para agrupar mensajes en consola 

// let ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// let perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

// let areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd(); // cerramos el grupo de consola

// CODIGO TRIANGULO

console.group("Triangulo");

// let ladoTriangulo1 = 6;
// let ladoTriangulo2 = 6;
// let baseTriangulo = 4;
// let alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

// let perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}

// let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

function areaTriangulo(base, altura) {
    return (parseInt(base) * parseInt(altura)) / 2;
}

console.groupEnd();

//CODIGO CIRCULO

console.group("CIRCULO");

// Radio
// let radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");


// Diametro
// let diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

function diametroCirculo(radio) {
    return radio * 2;
}

// PI
//let PI = 3.1415;
let PI = Math.PI;
console.log("PI es es: " + PI);


//Circuferencia
// let perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

function perimetroCirculo(radio) {
    let diametro = diametroCirculo(radio);
    return diametro * PI;
}


// AREA 
// let areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// AQUI INTERACTUAMOS CON EL HTML

//  CUADRADO

function calcularPerimetrocuadrado() {
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


// TRIANGULO

function calcularPerimetroTriangulo() {
    const inputLadoA = document.getElementById("ladoA");
    const inputLadoB = document.getElementById("ladoB");
    const inputLadoBase = document.getElementById("ladoBase");
    const valueLadoA = inputLadoA.value;
    const valueLadoB = inputLadoB.value;
    const valueLadoBase = inputLadoBase.value;

    const perimetro = perimetroTriangulo(valueLadoA,valueLadoB, valueLadoBase);
    alert(perimetro);
}


function calcularAreaTriangulo() {
    
}

function calcularAlturaTriangulo() {
    const inputLadoA = document.getElementById("ladoA");
    const inputLadoB = document.getElementById("ladoB");
    const inputLadoBase = document.getElementById("ladoBase");
    const valueLadoA = inputLadoA.value;
    const valueLadoB = inputLadoB.value;
    const valueLadoBase = inputLadoBase.value;

    if (valueLadoA === valueLadoB) {
        function isosceles(ladoA, base) {
            return  (Math.sqrt(Math.pow(ladoA, 2) - (Math.pow(base, 2) / 4)));
        }
        const altura = isosceles(valueLadoA, valueLadoBase);
        alert(altura);
    } else {
        alert("Los lados no corresponden a un triangulo Isosceles")
    }
    
}