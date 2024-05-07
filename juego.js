alert("bienvenido :3♥");

function play(usu) {
    let arr = ["piedra", "papel", "tijeras"]
    alert("Tu elegiste: " + arr[usu]);
 
    let opm = Math.floor(Math.random() * 3)
    alert("La maquina Eligio: " + arr[opm]);

    let resultado = document.getElementById("resultado");
    
    if (
        (opm == 1 && usu == 0) ||
        (opm == 2 && usu == 1) ||
        (opm == 0 && usu == 2)
    ) {
        resultado.innerHTML = '<img src="assets/img/perdiste.png" alt="perdiste">';
    } else if (opm == usu) {
        resultado.innerHTML = '<img src="assets/img/empate.png" alt="empate">';
    } else {
        resultado.innerHTML = '<img src="assets/img/ganaste.png" alt="ganaste">';
    }
}

function calcularcalificacion(){
    let calificacion = Number(document.getElementById("estudiante").value);
    let rta;

    switch (true) {
        case ( calificacion < 101 && calificacion > 80):
        rta = "A";
        break;
        case ( calificacion < 81 && calificacion > 60):
        rta = "B";
        break;
        case ( calificacion < 61 && calificacion > 40):
        rta = "C";
        break;
        case ( calificacion < 41 && calificacion > 20):
        rta = "D";
        break;
        case ( calificacion < 21 && calificacion > 0):
        rta = "F";
        break;
        default:
    }
        alert("Tu calificacion es (" + rta + ")" );
} 

function descuento(){
    let valor = Number(document.getElementById("valor").value);
    let rta10 = valor * 0.1;
    let rta5 = valor * 0.05;

    if (valor > 100 ){
        let rta = valor - rta10
        alert( "el valor de su compra es (" + valor + "$) y te da un descuento del 10% haciendo que el valor total a pagar sea (" + rta + "$) Felicidades!!! ♥");
    } else if (valor <= 100 && valor > 50   ) {
        let rta = valor - rta5
        alert( "el valor de su compra es (" + valor + "$) y te da un descuento del 5% haciendo que el valor total a pagar sea (" + rta + "$) Felicidades!!! ♥");
    } else {
        alert("El valor de su compra es (" + valor + "$) y no aplica descuento en este momento. ¡Gracias por su compra! ♥");
} 
}

// este es un cambio para commit sin mensaje
// este es un cambio para el segundo commit 

// este es el tercer commit solito

// commit #4

// Hola jorge como vamos??
// todo bien !!!

// que tal el clima hoy??


/// asdhjfiend;LD