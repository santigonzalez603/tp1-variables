const numero1 = parseInt(prompt("Ingrese un número"));
const numero2 = parseInt(prompt("Ingrese un segundo número"));
const numero3 = parseInt(prompt("Ingrese un tercer número"));
if(numero1 >= numero2 && numero1 >= numero3){
    document.writeln("El ",numero1," es el número más grande");
}
else if(numero2 >= numero3){
    document.writeln("El ",numero2," es el número más grande");
}
else{
    document.writeln("El ",numero3," es el número más grande");
}