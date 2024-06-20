import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddUser } from './AddUser'
import { UserList } from './UserList'
function App() {

  const [users, setUsers] = useState([])
  const handleAdd = obj => {
    setUsers([...users, { ...obj, id: obj.id}])
  }
  return (
    <>
      <UserList users={users} />
      <AddUser onAdd={handleAdd} />
    </>
  )
}

export default App
