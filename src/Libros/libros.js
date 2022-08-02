const libros = [
    {
        id: 1,
        titulo: "Coma",
        autor: "Robin Cook",
        img: "../Portadas/coma.jpg",
        precio: 2000,
        stock: 18,
        initial: 1
    },
    {
        id: 2,
        titulo: "Riesgo aceptable",
        autor: "Robin Cook",
        img: "../Portadas/riesgo-aceptable.jpg",
        precio: 2300,
        stock: 8,
        initial: 1
    },
    {
        id: 3,
        titulo: "Solas (aún acompañadas)",
        autor: "María Florencia Freijo",
        img: "../Portadas/solas.jpg",
        precio: 3000,
        stock: 50,
        initial: 1
    },
    {
        id: 4,
        titulo: "Mal educadas",
        autor: "María Florencia Freijo",
        img: "../Portadas/mal-educadas.jpg",
        precio: 3200,
        stock: 32,
        initial: 1
    },
    {
        id: 5,
        titulo: "Hábitos atómicos",
        autor: "James Clear",
        img: "../Portadas/habitos-atomicos.jpg",
        precio: 4000,
        stock: 40,
        initial: 1
    },
    {
        id: 6,
        titulo: "Tus zonas erróneas",
        autor: "Wayne Dyer",
        img: "../Portadas/tus-zonas-erroneas.jpg",
        precio: 1500,
        stock: 21,
        initial: 1
    },
]

const getFetch = new Promise((res, rej) => {
    let condicion = true
    if(condicion){
        setTimeout(() => {
            res(libros)
        }, 2000);
    } else{
        console.log("No hay datos")
    }
})

export default getFetch