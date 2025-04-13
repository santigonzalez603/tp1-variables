const numero1 = parseInt(prompt("Ingrese un número"));
if(numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0){
    if(numero1 % 5 === 0){
        document.writeln("El ",numero1," si es divisible por 5")
    }
}
else{
    document.writeln("El ",numero1," no es divisible por 5");
}