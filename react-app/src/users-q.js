import React from "react";

const Users = () => {
    const [name, setName] = React.useState();
    // const [users, setUsers] = React.useState(['user1', 'user2'])
    const [users, setUsers] = React.useState([
        { name: 'user1', age: 34 },
        { name: 'user2', age: 25 }
    ])

    const addUser = () => {
        // setUsers([...users, name])
        setUsers([...users, {name: name, age: 20}])
    }

    const userInputHandler = (e) => {
        setName(e.target.value)
    }

    return (
        <div className="container" style={{padding: 150}}>
            <input type="text" value={name} onChange={userInputHandler} />
            <button
                className={name.length <= 0 ? "btn btn-secondary" : "btn btn-success"}
                onClick={addUser}
                disabled={name == ''}
            >+</button>
            {users.map((u, i) => <p>Name: {u.name}, Age: {u.age}</p>)}
        </div>
    )
}

export default Users;