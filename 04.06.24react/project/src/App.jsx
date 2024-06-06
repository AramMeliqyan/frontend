import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([
    { id: 101, name: "Tiko", salery: 200000 },
    { id: 102, name: "Luso", salery: 300000 },
    { id: 103, name: "Ashot", salery: 400000 },
    { id: 104, name: "Karen", salery: 500000 },
  ]);
  const saleryUp = id=>{
    // // alert(id)
    // let temp = [...users]
    // let found = users.find(x=>x.id===id)
    // found.salery+=50000
    // setUsers(temp)
    setUsers(users.map(elm=>
      elm.id===id?{...elm,salery:elm.salery+50000}:elm
    ))
  }

  return (
    <>
      <h1>barev {4 + 3}</h1>
      <h2>Number {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>up!!</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>salery</th>
            <th>actions</th>
          </tr>

        </thead>

        <tbody>
    {
      users.map(elm=><tr key = {elm.id}>
        <td>{elm.id}</td>
        <td>{elm.name}</td>
        <td>{elm.salery}</td>
        <td>
          <button onClick= {()=>saleryUp(elm.id)}>salery up</button>
           </td>
      </tr>)

    }

        </tbody>

      </table>
    </>
  )
}

export default App
