//1.
const mensajePromise = new Promise ((resolve) => {
    setTimeout(() => {
        resolve("Consigna 1.")
    }, 2000);
})

mensajePromise
    .then((data) => console.log(data))

//2.
const numPromise = (num) => {
    return new Promise ((resolve, reject) =>{
        if(num){
            setTimeout(() => {
                resolve(num + num)
            }, 1000);
        }else{
            reject("No hay numero cargado")
        }
    })
}

numPromise(10)
    .then((num) => console.log(num))
    .catch((err) => console.log(err))

//3.
const primerPromesa = new Promise ((resolve) => {
    setTimeout(() => {
        resolve("Primer promesa y ")
    }, 3000);
})

const segundaPromesa = new Promise ((resolve) => {
    setTimeout(() => {
        resolve("segunda promesa.")
    }, 3000);
})

Promise.all([primerPromesa, segundaPromesa])
    .then((data) => console.log(data))

//4.
const url = "https://picsum.photos/list"



