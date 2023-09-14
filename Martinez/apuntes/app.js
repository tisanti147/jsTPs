const empleados = [
    {id: 1, salario: 1000},
    {id: 2, salario: 2000},
    {id: 3, salario: 3000},
    {id: 4, salario: 4000}
]

empleados.reduce

const getSalarioById = (id, callback) => {
    const empleado = empleados.find((sal) => sal.id === id)
    
    if(empleado){
        callback(null, empleado)
    }else{
        callback(`El empleado con ${id} no existe`)
    }
}

/*getSalarioById(1, (err, empleado) => {
    if(err){
        console.log("ERROR");
        return console.log(err);
    }
    console.log(empleado);
})*/

const calcularDescuento = new Promise((resolve, reject) => {
    const descuento = true
    if(descuento){
        resolve("Descuento realizado")
    }else{
        reject("Error, descuento no aplicado")
    }
})

/*calcularDescuento
    .then((data) => console.log(data))
    .catch((err) => console.log(err))*/

const estudiantes = [
    {id: 1, nombre: "Maria"},
    {id: 2, nombre: "Ana"},
    {id: 3, nombre: "Juan"}
]

const getEstudianteById = (id) => new Promise ((resolve, reject) => {
    const estudiante = estudiantes.find ((e) => e.id === id)
    if(estudiante){
        resolve(estudiante)
    }else{
        reject(`El estudiante con id ${id} no existe`)
    }
})

getEstudianteById(2)
    .then((estudiante) => console.log(estudiante))
    .catch((error) => console.log(error))