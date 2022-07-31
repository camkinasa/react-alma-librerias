import ItemCount from "./ItemCount/ItemCount"

const ItemListContainer = ( {greeting} ) => {
    return (
        <>
        <div style={{border:'solid black 2px', margin:'20px', padding:'50px'}}>
            <div>¡{greeting} a Alma Librerías!</div>
            <ItemCount stock={5} initial={0}></ItemCount>
        </div>
        </>
    )
  }
  export default ItemListContainer