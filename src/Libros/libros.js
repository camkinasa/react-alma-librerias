import { DB } from "./APIfirebase";
import { collection, getDocs, query, where } from 'firebase/firestore'

const TESTING_DELAY = 500;

const libros = [
    {
        id: 1,
        titulo: "Coma",
        autor: "Robin Cook",
        genero: "thriller-medico",
        img: "../Portadas/coma.jpg",
        precio: 2000,
        stock: 18,
        initial: 0,
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
        initial: 0,
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
        initial: 0,
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
        initial: 0,
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
        initial: 0,
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
        initial: 0,
        sinopsis: "Con un estilo sencillo, Wayne Dyer explica cómo existen ciertas zonas de la mente que, basándose en pensamiento, emociones y creencias, llegan a errores de percepción que se convierten en un obstáculo para alcanzar la felicidad y la paz interior."
    },
    {
        id: 7,
        titulo: "Mal comidos",
        autor: "Soledad Barruti",
        genero: "Actualidad",
        img: "../Portadas/mal-comidos.jpg",
        precio: 4000,
        stock: 22,
        initial: 0,
        sinopsis: "¿Qué hay detrás de lo que comemos? ¿Por qué las vacas ya no comen pasto? ¿Desde cuándo los criadores de pollos no comen pollo? ¿Qué peligros esconde una ensalada? ¿Qué hay detrás de cada delicado plato de sushi? ¿Cuáles son los ingredientes secretos en los alimentos procesados? ¿Qué relación hay entre la falta de trigo, la exclusión social, el asesinato de indígenas y las catástrofes naturales? ¿Por qué cada día hay más obesos, más diabéticos, más hipertensos y más enfermos de cáncer? Soledad Barruti despliega una investigación rigurosa y a la vez inquietante que explica por qué estamos mal comidos, peor encaminados, pero todavía a tiempo."
    },
    {
        id: 8,
        titulo: "Mala leche",
        autor: "Soledad Barruti",
        genero: "Actualidad",
        img: "../Portadas/mala-leche.jpg",
        precio: 4200,
        stock: 5,
        initial: 0,
        sinopsis: "Con bebés y niños como clientes predilectos, las grandes marcas parecen decididas a hacer de la comida una experiencia perfecta: práctica, rica hasta lo adictivo y libre de cualquier sospecha. Para lograrlo, cuentan con un arsenal imbatible de aromatizantes, colorantes, texturizantes, vitaminas agregadas, packagings rutilantes y miles de millones de dólares invertidos en publicidad. Todo parece diseñado para nuestra comodidad. Pero el precio que pagamos por comer sin saber es muy alto: la dieta actual se convirtió en el obstáculo más grande que deben sortear un niño para llegar sano a la adultez y un adulto a la vejez. La Organización Mundial de la Salud ya advierte sobre esta tragedia. Sin embargo, hay una industria que, a pesar de las evidencias, no parece dispuesta a dar un solo paso atrás. ¿Qué hacer entonces?"
    },
    {
        id: 9,
        titulo: "Patología estructural y funcional",
        autor: "Robbins y Cotran",
        genero: "Academico",
        img: "../Portadas/patologia-estructural-y-funcional.jpg",
        precio: 10000,
        stock: 32,
        initial: 0,
        sinopsis: "Facilita información actualizada relativa a las pruebas moleculares y genéticas, los mecanismos de enfermedad, la medicina personalizada y su repercusión en el tratamiento de las enfermedades, y la función del microbioma y el metaboloma en las enfermedades no transmisibles, entre otras cuestiones."
    },
    {
        id: 10,
        titulo: "Fisiología médica",
        autor: "Walter F. Boron",
        genero: "Academico",
        img: "../Portadas/fisiologia-medica.jpg",
        precio: 12000,
        stock: 12,
        initial: 0,
        sinopsis: "Texto de referencia en el área de Fisiología, considerada una de las biblias en la disciplina."
    },
    {
        id: 11,
        titulo: "Principios de bioquímica",
        autor: "Lehnninger",
        genero: "Academico",
        img: "../Portadas/principios-de-bioquimica.jpg",
        precio: 8000,
        stock: 7,
        initial: 0,
        sinopsis: "La primera edición de Principios de Bioquímicade Albert I. Lehninger, en 1970, supuso una auténtica revolución en la enseñanza de esta materia y creó un modelo que se ha mantenido fiel a lo largo de las sucesivas ediciones durante más de cuatro décadas."
    },
    {
        id: 12,
        titulo: "Pieles reales",
        autor: "Dadatina",
        genero: "Salud y belleza",
        img: "../Portadas/pieles-reales.jpg",
        precio: 3500,
        stock: 10,
        initial: 0,
        sinopsis: "Dadatina, una de las creadoras de contenido con más éxito en las redes sociales, nos presenta una guía básica de skincare, con toda la información necesaria para que conozcas más tu piel y que aprendas a cuidarla de la mejor manera posible. Acá está la respuesta a todas las dudas que te surgen cuando querés empezar o modificar tu rutina: vas a encontrar tips, cuestionarios, mitos y verdades, preguntas frecuentes y recomendaciones de profesionales. #PielesReales es el libro que todos los interesados en la piel y su cuidado están esperando."
    }
]

/* export const getFetch = new Promise((res, rej) => {
    let condicion = true
    if(condicion){
        setTimeout(() => {
            res(libros)
        }, 2000);
    } else{
        console.log("No hay datos")
    }
}) */

export async function getFetch(){
    let response = [];
    const colRef = collection(DB, "libros")
    try{
        const snapshot = await getDocs(colRef)
        response = snapshot.docs.map((ravDoc) => {
            return{
              id: ravDoc.id,
              ...ravDoc.data()}
          })
    } catch (err){
        console.log("error al cargar los libros")
    }
    return response
}

export async function getLibroByCategory(categoryId){
    let response = []
    const colRef = collection(DB, "category")
    try{
        const colFilterRef = query(colRef, where('genero', '==', categoryId))
        const snapshot = await getDocs(colFilterRef)
        response = snapshot.docs.map((ravDoc) => {
            return{
              id: ravDoc.id,
              ...ravDoc.data()
            }
        })
    } catch (err){
        console.log("error al cargar los libros")
    }
    return response
}

export async function getBookById(idLibro){
    let response = []
    const colRef = collection(DB, 'libros');
    try {
      const idRef = query(colRef, where('id', '==', idLibro))
      const snapshot = await getDocs(idRef);
      response = snapshot.docs.map((ravDoc) => {
            return{
              id: ravDoc.id,
              ...ravDoc.data()
            }
        })
    }catch(error) {
        console.log(error)
    }
    return response
}