let text = prompt("Escriba un frase");
let ntext = text.length;
let i;
for (i = 0; i < ntext; i++){
    if(text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u" || text.substr(i,1) === "A" || text.substr(i,1) === "E" || text.substr(i,1) === "I" || text.substr(i,1) === "O" || text.substr(i,1) === "U"){
        document.writeln(text.substr(i,1))
    }
}