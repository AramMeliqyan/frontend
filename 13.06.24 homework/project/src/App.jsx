
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Productlist } from './components/ProductList'
import { Basket } from './components/Basket'

function App() {

  const [count, setCount] = useState(0);
  const [basket, setBasket] = useState([]);
  const [selappled, setSelAppled] = useState(false)


  const [products, setProducts] = useState([
    { id: 101, title: "Psychology", price: 40, photo: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_2878,h_1090/dk-core-nonprod/9780744098556/9780744098556_cover.jpg" },
    { id: 102, title: "Politic", price: 50, photo: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_545/dk-core-nonprod/9780593844120/9780593844120_cover.jpg" },
    { id: 103, title: "Religion", price: 50, photo: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_545/dk-core-nonprod/9781465408433/9781465408433_cover.jpg" },
    { id: 104, title: "Busines", price: 50, photo: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_545/dk-core-nonprod/9781465415851/9781465415851_cover.jpg" }
  ]);
  const moveToCart = id => {
    let found = products.find(x => x.id == id)
    // setBasket([...basket, { ...found, count: 1 }])
    if (found) {
      setBasket(elm => {
        const setInBasket = elm.find(x => x.id == id)
        if(setInBasket){
          return elm.map(item=>item.id == id ? {...item,count:item.count + 1 }:item)
        }else{
          return [...elm,{...found,count:1}]
        }
      })
    }
  }
  const add = id => {
    setBasket(basket.map(elm => elm.id == id ? { ...elm, count: elm.count + 1 } : elm))
  }

  const sub = id => {
    setBasket(basket.map(elm => elm.id == id && elm.count > 1 ? { ...elm, count: elm.count - 1 } : elm))
  }

  const del = id => {
    setBasket(basket.filter(elm => elm.id !== id))
  }

  const aplaySel = () => {
    setBasket(basket.map(elm => elm.count > 3 ? { ...elm, price: ((elm.price * (elm.count - 1)) / elm.count) } : elm))
    setSelAppled(true);
  }


  return (
    <>
      <div className='row'>
        <Productlist items={products} onMove={moveToCart} />
        <Basket items={basket} onAdd={add} onSub={sub} onDel={del} onSel={aplaySel} onAppled={selappled} />

      </div>
    </>
  )
}
export default App