export const BasketItem = ({ title, price, count, id, onAdd, onSub, onDel }) => {
    return <tr>

        <td> {title} </td>
        <td> {price} </td>
        <td> {count} </td>
        <td> {price * count} </td>
        <td> <button onClick={() => onAdd(id) }> + </button>  <button onClick = {()=>onSub(id)}> - </button>  <button onClick ={()=>onDel(id)}> x </button> </td>

    </tr>

}