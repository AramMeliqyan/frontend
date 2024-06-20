
import { useRef, useState } from "react"
export const AddUser = ({ onAdd }) => {
    const [user, setUser] = useState({ id: "", name: "", surname: "", login: "", password: "" })

    const reg = /[0-9]/
    const [error, setError] = useState("")
    const [succsess, setSuccsess] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if (!user.name.trim() || !user.id.trim() || !user.surname.trim() || !user.login.trim() || !user.password.trim()) {
            return setError("please fill all filds")
        }
        if (user.password.length < 6) {
            return setError("password must be longer 6 characters`")
        }

        if(!reg.test(user.id)) {
            return setError("id must be number")
        }

        onAdd(user)
        setUser({ name: "", salary: "", profession: "" })
        setError("")
        setSuccsess("User edit succsessfully")
        setTimeout(() => {
            setSuccsess("")
        }, 2000)
    }
    return <div>
        <h3>Signup</h3>
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {succsess && <p style={{ color: "green" }}>{succsess}</p>}

            <input placeholder="id" value={user.id} onChange={e => setUser({ ...user, id: e.target.value })} />
            <input placeholder="name" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
            <input placeholder="surname" value={user.surname} onChange={e => setUser({ ...user, surname: e.target.value })} />
            <input type="email" placeholder="login" value={user.login} onChange={e => setUser({ ...user, login: e.target.value })} />
            <input type="password" placeholder="password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
            <button>Save</button>
        </form>
    </div>
}