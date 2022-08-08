const libros = [
    {
        id: 1,
        titulo: "Coma",
        autor: "Robin Cook",
        genero: "thriller-medico",
        img: "../Portadas/coma.jpg",
        precio: 2000,
        stock: 18,
        initial: 1,
        sinopsis: "Eran «intervenciones menores», operaciones de rutina de las que se hacían diariamente en el gran hospital de Boston. Pero algunos pacientes, demasiados, no despertaban. Quedaban en coma en la mesa de operaciones, víctimas de inexplicables accidentes. Hasta que una joven practicante de medicina decidió averiguar qué había detrás de tales coincidencias."
    },
    {
        id: 2,
        titulo: "Riesgo aceptable",
        autor: "Robin Cook",
        genero: "thriller-medico",
        img: "../Portadas/riesgo-aceptable.jpg",
        precio: 2300,
        stock: 8,
        initial: 1,
        sinopsis: "Las primeras pruebas con seres humanos dan buen resultado, salvo por un problema menor: los pacientes sufren pérdidas breves de memoria. Con miles de millones de dólares en juego, muchos científicos en el mundo pugnan por descubrir el psicofármaco que supere al famoso antidepresivo Prozac."
    },
    {
        id: 3,
        titulo: "Solas (aún acompañadas)",
        autor: "María Florencia Freijo",
        genero: "feminismo",
        img: "../Portadas/solas.jpg",
        precio: 3000,
        stock: 50,
        initial: 1,
        sinopsis: "Flor Freijo hace un repaso interesantísimo por la cultura; la política; la industria del entretenimiento; para averiguar cuándo fue que nació esta diferencia social; que nos ha convertido en ciudadanas de segunda: con menos derechos; menos ingresos; menos justicia."
    },
    {
        id: 4,
        titulo: "Mal educadas",
        autor: "María Florencia Freijo",
        genero: "feminismo",
        img: "../Portadas/mal-educadas.jpg",
        precio: 3200,
        stock: 32,
        initial: 1,
        sinopsis: "Con una aguda mirada histórica y una escritura lúcida y personal, la autora encuentra en el concepto de “mala educación” un punto de partida que consolida una serie de prejuicios sobre las mujeres. Así se construyeron y se sostienen los arquetipos de la mala mujer: puta, bruja, vividora, loca... María Florencia Freijo muestra y explica en este libro imprescindible la línea que une la historia silenciada de las mujeres, en busca de descubrir el porqué de esto que aparece como un destino, pero que es en realidad un mandato que sólo con conocimiento se podrá cambiar, para que cada mujer pueda trazar una historia propia más libre y más consciente."
    },
    {
        id: 5,
        titulo: "Hábitos atómicos",
        autor: "James Clear",
        genero: "productividad",
        img: "../Portadas/habitos-atomicos.jpg",
        precio: 4000,
        stock: 40,
        initial: 1,
        sinopsis: "En Hábitos atómicos, James Clear expone todos los antídotos posibles para terminar con los malos hábitos, desarrollar nuevos y más saludables, aprovechar su poder sobre nuestra vida y alcanzar metas más grandes en el mediano y largo plazo."
    },
    {
        id: 6,
        titulo: "Tus zonas erróneas",
        autor: "Wayne Dyer",
        genero: "autoayuda",
        img: "../Portadas/tus-zonas-erroneas.jpg",
        precio: 1500,
        stock: 21,
        initial: 1,
        sinopsis: "Con un estilo sencillo, Wayne Dyer explica cómo existen ciertas zonas de la mente que, basándose en pensamiento, emociones y creencias, llegan a errores de percepción que se convierten en un obstáculo para alcanzar la felicidad y la paz interior."
    }
]

export const getFetch = new Promise((res, rej) => {
    let condicion = true
    if(condicion){
        setTimeout(() => {
            res(libros)
        }, 2000);
    } else{
        console.log("No hay datos")
    }
})

export const getBookById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(libros.find(libro => libro.id == id))
      }, 2000);
    })
}

export const getLibroByCategory = (genero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(libros.filter(libro => libro.genero === genero))
        }, 2000)
    })
}