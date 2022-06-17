console.log("Se nota que aun me extrañas");

setInterval(cambiarSaludo, 9000);

function cambiarSaludo(){
    //console.log("Goodbye World");
let frase = document.getElementsByTagName("h3")[0].innerHTML;


if(document.getElementsByTagName("h3")[0].innerHTML == "Hello World"){
    document.getElementsByTagName("h3")[0].innerHTML = "Goodbye World";
} else {
    document.getElementsByTagName("h3")[0].innerHTML = "Hello World";
}
console.log("frase: " + frase);
}