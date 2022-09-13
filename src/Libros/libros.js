import { DB } from "./APIfirebase";
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore'

const TESTING_DELAY = 500;

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
    const colRef = collection(DB, "libros")
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
    const colRef = doc(DB, 'libros', idLibro);
    const response = getDoc(colRef).then(snapshot =>{
        if (snapshot.exists()) {
            console.log({id: snapshot.id, ...snapshot.data()});
            return{
                id: snapshot.id,
                ...snapshot.data()
            }
        }
        console.log(snapshot)
    })
    return response
}
