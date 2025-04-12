const numero1 = parseInt(prompt("Ingrese un número"));
if(numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0){
    document.writeln("Si es divisible por 2 , 3, 5, 7");
}
else{
    document.writeln("No es divisible por 2, ni por 3, ni por 5, ni por 7");
}