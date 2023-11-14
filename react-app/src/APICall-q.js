import React from "react";

export default function APICall() {
    const [users, setUsers] = React.useState([])

    const apiReq = () => {
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
            <button onClick={apiReq}>Load Users</button>
            <ul>
                {users.map((e, i) => <li key={i}>{e.username}</li> )}
            </ul>
        </div>
    )
}