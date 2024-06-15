import { ProductItem } from "./ProductItem"

export const Productlist = ({items,onMove})=>{
    return <div>
        <h3>ProductList</h3>
        <div className="list">
            {
                items.map(elm=><ProductItem key={elm.id} {...elm} onMove = {onMove}/>)
            }
        </div>
    </div>
}