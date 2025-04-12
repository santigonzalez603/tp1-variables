const numero1 = parseInt(prompt("Ingrese un número"));
const numero2 = parseInt(prompt("Ingrese un segundo número"));
const numero3 = parseInt(prompt("Ingrese un tercer número"));
if(numero1 >= numero2 && numero1 >= numero3){
    document.writeln("El mayor de los tres es el: " + numero1);
}
else if(numero2 >= numero3){
    document.writeln("El mayor de los tres es el: " + numero2);
}
else{
    document.writeln("El mayor de los tres es el: " + numero3);
}