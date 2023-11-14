import React from "react";

export default function APICallP() {

    const [users, setUsers] = React.useState([])

    const apiRequest = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUsers(json)
                console.log(json)
            })
    }

    return (
        <div>
            <h3>API Call to JSONPlaceholder</h3>
            <button onClick={apiRequest}>Load Users</button>
            <ul>
                {users.map((e, i) => <li>{e.username}</li> )}
            </ul>
        </div>
    )
}