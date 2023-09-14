//1.
function mostrarMensaje(mensaje, callback){
    console.log(mensaje);
    callback()
}

function cb (){
    console.log("Esto es un callback.");
}

mostrarMensaje("Hola :3", cb)

//2.
function sumarAsync(num1, num2, callback){
    callback(num1 + num2)
}

function mostrarSuma(suma){
    console.log("El resultado es: " + suma);
}

sumarAsync(2, 2, mostrarSuma)

//3.
function retrasarEjecucion(callback, ms){
    setTimeout( () => {
        callback()
    }, ms)
}

retrasarEjecucion(cb, 3000)