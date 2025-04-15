let h = parseFloat(prompt("Ingrese la longitud de la altura del rectángulo"));
let b = parseFloat(prompt("Ingrese la longitud de la base del rectángulo"));
let a = b*h; //cálculo del área del rectángulo
let p = 2*(h+b); //cálculo del perímetro del rectágulo
document.writeln("El área del rectángulo de altura, ",h," y base ",b," es: ", a," unidades cuadradas");
document.writeln("<br>El perímetro del rectángulo de altura, ",h," y base ",b," es: ", p," unidades. ");
