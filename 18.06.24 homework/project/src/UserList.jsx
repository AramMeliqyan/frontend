export const UserList = ({ users }) => {
    return <div>
        <h3>UserList</h3>
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>surname</td>
                    <td>password</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(elm => <tr key={elm.id}>
                        <td>{elm.id}</td>
                        <td>{elm.name}</td>
                        <td>{elm.surname}</td>
                        <td>{elm.password}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}