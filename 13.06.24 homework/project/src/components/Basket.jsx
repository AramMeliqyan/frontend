import { BasketItem } from "./BasketItem"

export const Basket = ({ items, onAdd, onSub, onDel, onSel, onAppled }) => {
    return <div>
        <h3>Basket</h3>
        {!onAppled && <button onClick={onSel}>sale</button>}
        <table>
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    items.map(elm => <BasketItem key={elm.id} {...elm} onAdd={onAdd} onSub={onSub} onDel={onDel} />)


                }
            </tbody>

        </table>
    </div>
}