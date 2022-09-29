import ItemList from "./ItemList";


// Componente Contenedor
const Menu = ({opciones}) => {
       
    return (
      <ul>
        {
            opciones.map((opt, index) => <ItemList key={index} opcion={opt} />)
        }
      </ul>
    )
}
export default Menu;